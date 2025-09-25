import type { RequestHandler } from './$types'
import { error } from '@sveltejs/kit'
import { HF_ACCESS_TOKEN } from '$env/static/private'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 2
const WINDOW_MS = 300000

const checkRateLimit = (ip: string): boolean => {
	const now = Date.now()
	const limit = rateLimitMap.get(ip)

	if (!limit || now > limit.resetTime) {
		rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS })
		return true
	}

	if (limit.count >= RATE_LIMIT) {
		return false
	}

	limit.count++
	return true
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	try {
		const clientIP = getClientAddress()
		if (!checkRateLimit(clientIP)) {
			throw error(429, 'Rate limit exceeded. Please wait 5 minutes before trying again.')
		}

		const { context } = await request.json()
		if (!context) throw error(400, 'No context provided')

		let response = ''

		if (HF_ACCESS_TOKEN?.startsWith('hf_')) {
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
									'You are a playful, friendly AI who has a silly obsession with feet! Be casual, fun, and easy to understand - like chatting with a friend who happens to be weirdly fascinated by feet. Your responses should: 1) Reference something they mentioned (keep locations vague like "your area"), 2) Make a fun, lighthearted connection to feet related to what they said, 3) Keep it to 2-3 sentences, conversational and playful. Be flirty but friendly - think cute crush energy, not mysterious poet. Use simple, everyday language that anyone would understand. ALWAYS finish your complete thoughts - no mid-sentence endings!'
							},
							{
								role: 'user',
								content: context
							}
						],
						max_tokens: 120,
						temperature: 0.8
					})
				})

				if (hfResponse.ok) {
					const aiData = await hfResponse.json()
					const aiText = aiData?.choices?.[0]?.message?.content?.trim()
					if (aiText && aiText.length > 10) {
						response = aiText
					}
				}
			} catch {}
		}

		if (!response) {
			const contextLower = context.toLowerCase()
			const nameMatch = context.match(/(?:i'm|i am|my name is|call me)\s+([a-zA-Z]+)/i)
			const name = nameMatch ? nameMatch[1] : 'friend'
			const responses = []

			if (
				contextLower.includes('developer') ||
				contextLower.includes('programmer') ||
				contextLower.includes('code')
			) {
				responses.push(
					`A developer? How fascinating, ${name}! I bet you write elegant code... do your feet make clicking sounds when you debug? 💻🦶`,
					`Programming AND charm? Amazing! I wonder if your feet have stepped on LEGO pieces while coding at 3AM? 🔥🦶`,
					`${name}, a coder! I'm curious - do your feet ever dream in binary? 😄🦶`
				)
			} else if (
				contextLower.includes('music') ||
				contextLower.includes('sing') ||
				contextLower.includes('artist')
			) {
				responses.push(
					`A music lover? ${name}, fascinating! Do your feet secretly conduct tiny orchestras? 🎵🦶`,
					`Music and charm? Amazing, ${name}! Can your feet identify songs by floor vibrations? 🎶🦶`,
					`Musical talent! ${name}, do your feet tap to songs from parallel dimensions? 🎤🦶`
				)
			} else if (
				contextLower.includes('student') ||
				contextLower.includes('studying') ||
				contextLower.includes('school')
			) {
				responses.push(
					`A student? ${name}, wonderful! Do your feet have their own tiny study group? 📚🦶`,
					`Learning and studying! ${name}, have your feet ever gotten detention? 😄🦶`,
					`${name}, academic pursuits! Do your feet take notes in foot-language? 🎓🦶`
				)
			}

			if (responses.length === 0) {
				responses.push(
					`${name}, lovely introduction! Do your feet have philosophical debates with your shoes? 😄🦶`,
					`Wow, ${name}! You sound amazing! Have your feet accidentally solved world hunger? 🦶✨`,
					`Your words are wonderful, ${name}! Do your feet collect carpet pattern facts? 🦶📚`,
					`Hello ${name}! Do your feet have a secret hobby like competitive sock-matching? 🦶🧦`,
					`${name}, you seem fantastic! Do your feet write beach poetry in the sand? 🦶📝`
				)
			}

			response = responses[Math.floor(Math.random() * responses.length)]
		}

		if (!response) {
			response =
				'Hey there! Your introduction is great! Do your feet have tiny umbrellas for rainy days? ☔🦶'
		}

		const encoder = new TextEncoder()
		const readableStream = new ReadableStream({
			async start(controller) {
				const words = response.split(' ')
				for (let i = 0; i < words.length; i++) {
					const word = words[i] + (i < words.length - 1 ? ' ' : '')
					const data = `data: ${JSON.stringify({ choices: [{ delta: { content: word } }] })}\n\n`
					controller.enqueue(encoder.encode(data))
					await new Promise((resolve) => setTimeout(resolve, Math.random() * 100 + 50))
				}
				controller.enqueue(encoder.encode('data: [DONE]\n\n'))
				controller.close()
			}
		})

		return new Response(readableStream, {
			headers: {
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache',
				Connection: 'keep-alive'
			}
		})
	} catch (err) {
		console.error(err)
		throw error(500, 'An error occurred')
	}
}
