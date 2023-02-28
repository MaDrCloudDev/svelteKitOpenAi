<script lang="ts">
	import type { CreateCompletionResponse } from "openai"
import { SSE } from "sse.js"


let context = ''
let loading = false
let error = false
let answer = ''
const handleSubmit = async () => {
	loading = true
	error = false
	const eventSource = new SSE('api/explain', {
		headers: {
			'Content-Type': 'application/json'
		},
		payload: JSON.stringify({ context })
	})
	context = ''
	eventSource.addEventListener('error', (e) => {
		error = true
		loading = false
		alert('Did not work!')
		// add toast here
	})
	eventSource.addEventListener('message', (e) => {
		try {
			loading = false
			if (e.data === '[DONE]') {
				return
			}
			const completionResponse: CreateCompletionResponse = JSON.parse(e.data)
		} catch (err) {

		}
	})
}
</script>

<h1>Explain It Like I'm Five</h1>
<form on:submit preventDefault={() => }>
	<label for="context">Enter the text you want summarized/explained</label>
	<textarea bind:value={context} name="context" rows="5" />
	<button>Explain it</button>
	<div class="pt-4">
		<h2>Explanation:</h2>
		<p>Explaining text here</p>
	</div>
</form>
