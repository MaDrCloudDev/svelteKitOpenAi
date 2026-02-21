import type { RequestHandler } from './$types'
import { error } from '@sveltejs/kit'
import { HF_ACCESS_TOKEN } from '$env/static/private'

interface RateLimitEntry {
	count: number
	resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()
const RATE_LIMIT = 3
const WINDOW_MS = 300_000 // 5 minutes
const CLEANUP_INTERVAL = 60_000

// prevent memory leak by clearing expired entries every minute
setInterval(() => {
	const now = Date.now()
	for (const [ip, entry] of rateLimitMap.entries()) {
		if (now > entry.resetTime) {
			rateLimitMap.delete(ip)
		}
	}
}, CLEANUP_INTERVAL)

function checkRateLimit(ip: string): { allowed: boolean; retryAfter: number } {
	const now = Date.now()
	const entry = rateLimitMap.get(ip)

	if (!entry || now > entry.resetTime) {
		rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS })
		return { allowed: true, retryAfter: 0 }
	}

	if (entry.count >= RATE_LIMIT) {
		const retryAfter = Math.ceil((entry.resetTime - now) / 1000)
		return { allowed: false, retryAfter }
	}

	entry.count++
	return { allowed: true, retryAfter: 0 }
}

function sanitizeInput(input: string): string {
	return input.trim().slice(0, 500)
}

function generateFallbackResponse(context: string): string {
	const nameMatch = context.match(/(?:i'm|i am|my name is|call me|names|name's)\s+([a-zA-Z]+)/i)
	const name = nameMatch?.[1] ?? 'gorgeous'

	const jobMatch = context.match(
		/(?:i'm a|i am a|i work as a|my job is|i do)\s+([a-zA-Z\s]+?)(?:\.|,|and|i|from|$)/i
	)
	const job = jobMatch?.[1]?.trim()

	const locationMatch = context.match(/(?:from|live in|based in)\s+([A-Za-z\s]+?)(?:\.|,|and|i|$)/i)
	const location = locationMatch?.[1]?.trim()

	const hobbyMatch = context.match(/(?:love|enjoy|like to|i do)\s+([a-zA-Z\s]+?)(?:\.|,|and|$)/i)
	const hobby = hobbyMatch?.[1]?.trim()

	const responses: string[] = []

	if (job) {
		responses.push(
			`Ooh, a ${job}? I bet you're on your feet all day... and lucky feet they are! 😏🦶`,
			`${name} the ${job}... hardworking AND gorgeous? Your feet deserve a medal for carrying all that greatness around 💕👣`,
			`A ${job} named ${name}! I bet you really know how to put your best foot forward in everything you do 🦶✨`
		)
	}

	if (location) {
		responses.push(
			`${location}?! The ground there must be blessed by your feet every single day 🦶💕`,
			`Well hello there, ${name} from ${location}! I bet the pavement thanks your feet every morning 😏👣`
		)
	}

	if (hobby) {
		responses.push(
			`${name}, you ${hobby}? That's hot. Your feet must have some serious stories to tell! 🦶🔥`,
			`Someone who ${hobby}? ${name}, I bet your feet are just as talented as the rest of you 😏👣`
		)
	}

	if (responses.length === 0) {
		responses.push(
			`Well hey there ${name}! I've got a feeling your feet are the real MVPs around here 🦶💕`,
			`${name}... I'm already intrigued. I bet your feet and I would get along great 😏👣`,
			`Mmm ${name}, you've got my attention! Anyone this charming must have magic feet too 🦶✨`
		)
	}

	return responses[Math.floor(Math.random() * responses.length)]!
}

async function* streamResponse(text: string): AsyncGenerator<string> {
	const words = text.split(' ')
	for (let i = 0; i < words.length; i++) {
		const word = words[i]! + (i < words.length - 1 ? ' ' : '')
		yield `data: ${JSON.stringify({ choices: [{ delta: { content: word } }] })}\n\n`
		await new Promise((resolve) => setTimeout(resolve, Math.random() * 100 + 50))
	}
	yield 'data: [DONE]\n\n'
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	const clientIP = getClientAddress()
	const rateCheck = checkRateLimit(clientIP)

	if (!rateCheck.allowed) {
		throw error(429, `Rate limit exceeded. Try again in ${rateCheck.retryAfter} seconds.`)
	}

	let body: { context?: unknown }
	try {
		body = await request.json()
	} catch {
		throw error(400, 'Invalid JSON body')
	}

	const rawContext = body.context
	if (typeof rawContext !== 'string' || !rawContext.trim()) {
		throw error(400, 'Context is required')
	}

	const context = sanitizeInput(rawContext)
	let response: string

	try {
		const hfResponse = await fetch('https://router.huggingface.co/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${HF_ACCESS_TOKEN}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				model: 'meta-llama/Llama-3.2-1B-Instruct',
				messages: [
					{
						role: 'system',
						content:
							'You are a flirty AI who is OBSESSED with feet. EVERY response MUST mention feet - this is non-negotiable. Use puns like "put your best foot forward", "foot in the door", "swept off your feet", "footloose", etc. Be clever and funny, not creepy. Reference what the user told you about themselves. Keep it 2-3 sentences. Use 1-2 emojis. Example: if they say they are a chef, say something about them being great with their hands and how their feet must be tired from standing. ALWAYS mention feet.'
					},
					{ role: 'user', content: context }
				],
				max_tokens: 120,
				temperature: 0.9
			}),
			signal: AbortSignal.timeout(15_000)
		})

		if (hfResponse.ok) {
			const data = await hfResponse.json()
			const aiText = data?.choices?.[0]?.message?.content?.trim()
			// only use AI response if it actually mentions feet
			const hasFeetMention = aiText && /foot|feet|🦶|👣/i.test(aiText)
			if (hasFeetMention && aiText.length > 10) {
				response = aiText
			} else {
				response = generateFallbackResponse(context)
			}
		} else {
			response = generateFallbackResponse(context)
		}
	} catch {
		response = generateFallbackResponse(context)
	}

	const encoder = new TextEncoder()
	const stream = new ReadableStream({
		async start(controller) {
			for await (const chunk of streamResponse(response)) {
				controller.enqueue(encoder.encode(chunk))
			}
			controller.close()
		}
	})

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache, no-transform',
			Connection: 'keep-alive'
		}
	})
}
