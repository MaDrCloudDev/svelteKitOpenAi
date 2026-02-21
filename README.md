# flirtatiousAI 1.0

A playful AI companion built with modern web technologies. Features real-time streaming responses, intelligent rate limiting, and a polished cyberpunk-inspired UI.

## Features

- **SvelteKit 2** with Svelte 5 runes for reactive state management
- **Streaming responses** for real-time conversation flow
- **Smart rate limiting** (3 requests per 5 minutes per IP)
- **Toast notifications** replacing intrusive alerts
- **Hugging Face Inference** with Llama 3.2 fallback
- **TypeScript** with strict type checking
- **Tailwind CSS 4** for responsive design
- **Vercel-ready** deployment

## Tech Stack

- Svelte 5 with runes (`$state`, `$derived`)
- SvelteKit 2
- TypeScript
- Tailwind CSS 4
- Vercel adapter

## Quick Start

```bash
# Clone
git clone https://github.com/MaDrCloudDev/flirtatiousAI.git
cd flirtatiousAI

# Install
pnpm install

# Configure
echo "HF_ACCESS_TOKEN=your_token_here" > .env

# Run
pnpm dev
```

Get your token from [Hugging Face Settings](https://huggingface.co/settings/tokens) (requires `inference.serverless.write` permissions).

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── Toast.svelte      # Toast notification system
│   ├── notifications.svelte.ts # State management for toasts
│   └── types.ts              # Shared TypeScript types
├── routes/
│   ├── api/flirt/
│   │   └── +server.ts        # Streaming API endpoint
│   ├── +layout.svelte        # Root layout
│   └── +page.svelte          # Main chat interface
├── app.css                   # Global styles
└── app.html                  # HTML template
```

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start development server |
| `pnpm build`   | Build for production     |
| `pnpm preview` | Preview production build |
| `pnpm check`   | Type check               |
| `pnpm format`  | Format with Prettier     |
| `pnpm lint`    | Check formatting         |

## API

### POST /api/flirt

Request:

```json
{ "context": "Hi, I'm Alex..." }
```

Response: Server-Sent Events stream with JSON chunks

Rate limited to 3 requests per 5 minutes per IP.

## License

MIT
