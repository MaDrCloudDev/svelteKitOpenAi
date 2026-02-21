<script lang="ts">
	import { fly } from 'svelte/transition'
	import { getNotifications, dismiss } from '$lib/notifications.svelte'

	const notifications = getNotifications()
</script>

{#if notifications.length > 0}
	<div class="toast-container" role="status" aria-live="polite">
		{#each notifications as notification (notification.id)}
			<div
				class="toast toast-{notification.type}"
				transition:fly={{ y: -20, duration: 300 }}
				role="button"
				tabindex="0"
				onclick={() => dismiss(notification.id)}
				onkeydown={(e) => e.key === 'Enter' && dismiss(notification.id)}
			>
				<span>{notification.message}</span>
				<button class="toast-close" aria-label="Dismiss"> &times; </button>
			</div>
		{/each}
	</div>
{/if}

<style>
	.toast-container {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 100;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 90vw;
	}

	.toast {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		border: 2px solid;
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.toast:hover {
		transform: translateX(-4px);
		box-shadow: 4px 4px 0 -1px currentColor;
	}

	.toast-error {
		background: rgba(239, 68, 68, 0.1);
		border-color: #ef4444;
		color: #fca5a5;
	}

	.toast-warning {
		background: rgba(251, 191, 36, 0.1);
		border-color: #fbbf24;
		color: #fcd34d;
	}

	.toast-success {
		background: rgba(34, 197, 94, 0.1);
		border-color: #22c55e;
		color: #86efac;
	}

	.toast-close {
		background: none;
		border: none;
		color: inherit;
		font-size: 1.25rem;
		cursor: pointer;
		padding: 0;
		line-height: 1;
		opacity: 0.7;
		transition: opacity 0.2s;
	}

	.toast-close:hover {
		opacity: 1;
	}
</style>
