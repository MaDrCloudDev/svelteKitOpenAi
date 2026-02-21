interface Notification {
	id: string
	message: string
	type: 'error' | 'warning' | 'success'
	duration?: number
}

let notifications = $state<Notification[]>([])

export function notify(message: string, type: Notification['type'] = 'error', duration = 5000) {
	const id = crypto.randomUUID()
	notifications = [...notifications, { id, message, type, duration }]

	if (duration > 0) {
		setTimeout(() => dismiss(id), duration)
	}

	return id
}

export function dismiss(id: string) {
	notifications = notifications.filter((n) => n.id !== id)
}

export function getNotifications() {
	return notifications
}
