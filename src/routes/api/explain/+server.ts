import { API_KEY } from '$env/static/private'
import { error } from '@sveltejs/kit'
import { oneLine, stripIndent } from 'common-tags'
import type { CreateCompletionRequest } from 'openai'
import type { RequestHandler } from './types'

export const POST: RequestHandler = async ({ request }) => {
	try {
		if (!API_KEY) {
			throw new Error('API_KEY not set')
		}
		const requestData = await request.json()
		if (!requestData) {
			throw new Error('No request data')
		}
		const { context } = requestData
		if (!context) {
			throw new Error('No context')
		}
		const prompt = stripIndent`${oneLine`You are an enthusiastic kindergarten teacher who loves explaining things to students. Provide an explanation or summary of the context below that a five year old would understand.`}
        
        Context:"""${context.trim()}"""

        Answer:
        `
		const completionOpts: CreateCompletionRequest = {
			model: 'text-davinci-003',
			prompt,
			max_tokens: 256,
			temperature: 0.9,
			stream: true
		}
		const response = await fetch('https://api.openai.com/v1/completions', {
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			},
			method: 'POST',
			body: JSON.stringify(completionOpts)
		})
		if (!response.ok) {
			const err = await response.json()
			console.error(err)
			throw new Error('OpenAI API error', err)
		}
		return new Response(response.body, {
			headers: {
				'Content-Type': 'text/event-stream'
			}
		})
	} catch (err) {
		console.log(err)
		throw error(500, "Couldn't generate explanation")
	}
}
