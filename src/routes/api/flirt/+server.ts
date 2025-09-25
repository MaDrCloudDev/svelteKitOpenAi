import { HF_ACCESS_TOKEN } from '$env/static/private'
import type { RequestHandler } from './$types'
import { error } from '@sveltejs/kit'

// Rate limiting storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT = {
	maxRequests: 2,
	windowMs: 5 * 60 * 1000 // 5 minutes
}

function checkRateLimit(clientIP: string): boolean {
	const now = Date.now()
	const clientData = rateLimitMap.get(clientIP)

	if (!clientData) {
		rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
		return true
	}

	// Reset if window has passed
	if (now > clientData.resetTime) {
		rateLimitMap.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT.windowMs })
		return true
	}

	// Check if under limit
	if (clientData.count < RATE_LIMIT.maxRequests) {
		clientData.count++
		return true
	}

	return false
}

function getClientIP(request: Request): string {
	return (
		request.headers.get('cf-connecting-ip') ||
		request.headers.get('x-forwarded-for') ||
		request.headers.get('x-real-ip') ||
		'unknown'
	)
}

export const POST: RequestHandler = async ({ request }) => {
	try {
		// Rate limiting check
		const clientIP = getClientIP(request)
		if (!checkRateLimit(clientIP)) {
			throw error(429, 'Rate limit exceeded. Try again in a few minutes.')
		}

		const { message } = await request.json()

		if (!message?.trim()) {
			throw error(400, 'Message is required')
		}

		if (!HF_ACCESS_TOKEN) {
			throw error(500, 'HF_ACCESS_TOKEN not configured')
		}

		const response = await fetch(
			'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-1B-Instruct/v1/chat/completions',
			{
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
								'You are a charming, witty, and playfully flirty conversation partner. Keep responses natural, engaging, and fun while being respectful. Use casual language, light humor, and just the right amount of playful teasing to keep things interesting.'
						},
						{
							role: 'user',
							content: message
						}
					],
					max_tokens: 200,
					temperature: 0.7,
					stream: true
				})
			}
		)

		if (!response.ok) {
			const errorText = await response.text()
			console.error('Hugging Face API error:', response.status, errorText)
			throw error(response.status, `AI service error: ${response.statusText}`)
		}

		return new Response(response.body, {
			headers: {
				'Content-Type': 'text/plain; charset=utf-8',
				'Cache-Control': 'no-cache'
			}
		})
	} catch (e) {
		console.error('API Error:', e)
		if (e instanceof Error && 'status' in e) {
			throw e
		}
		throw error(500, 'Internal server error')
	}
}
