import type { RequestHandler } from './$types'
import { error } from '@sveltejs/kit'
import { HF_ACCESS_TOKEN } from '$env/static/private'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 3
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
									'You are flirtatious AI with a foot fascination. Always make suggestive innuendo connecting what they say to feet. Use phrases like "I bet your feet..." with dual meanings. Be playful, sexy, and include 🦶 emoji in the line about feet. Keep responses 2-3 sentences max.'
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
			const nameMatch = context.match(/(?:i'm|i am|my name is|call me)\s+([a-zA-Z]+)/i)
			const name = nameMatch ? nameMatch[1] : 'gorgeous'

			const responses = [
				`Hey there ${name}... you sound absolutely irresistible! I bet you know how to make someone's heart race �💕`,
				`Mmm, ${name}, your introduction is getting me all worked up! There's something so appealing about you... ��🔥`,
				`${name}, you've got me completely captivated! I have a feeling you're really good with your... hands 😉✨`,
				`Well hello there, sexy ${name}! You seem like someone who knows how to have a really good time... 😏💫`,
				`${name}, just talking to you is making me feel all tingly! I bet you could teach me a thing or two... 😘�`,
				`Damn ${name}, you're smooth! I love someone who knows how to work it... in all the right ways 😉�`,
				`Hey beautiful ${name}! Your words are making me imagine all sorts of... interesting possibilities 😏�`,
				`${name}, you're absolutely delicious! I bet you taste as good as you sound... 😘�`
			]

			response = responses[Math.floor(Math.random() * responses.length)]
		}

		if (!response) {
			response =
				'Hey there gorgeous! Your introduction is absolutely delightful... you seem like someone who knows how to have a good time 😘💕'
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
