# flirtatiousAI 2.0

A charming AI companion built with modern web technologies. This playful chat application demonstrates real-time streaming responses, rate limiting, and contemporary UI design patterns.

## What it does

flirtatiousAI creates engaging, witty conversations using Meta's Llama 3.2 model via Hugging Face. The AI personality is designed to be charming and playfully flirty while maintaining respect and appropriate boundaries.

## Technical highlights

- **SvelteKit 2.0** with the latest Svelte 5 runes syntax
- **Hugging Face Integration** using Llama-3.2-1B-Instruct model
- **Streaming responses** for real-time conversation flow
- **Rate limiting** (2 requests per 5 minutes per IP)
- **Modern TypeScript** with strict type checking
- **Tailwind CSS** for responsive, cyberpunk-inspired design
- **Vercel deployment** ready with serverless functions

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MaDrCloudDev/svelteKitOpenAi.git
   cd svelteKitOpenAi
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment**
   Create a `.env` file with your Hugging Face token:
   ```
   HF_ACCESS_TOKEN=your_hugging_face_token_here
   ```
   
   Get your token from [Hugging Face Settings](https://huggingface.co/settings/tokens) (requires fine-grained token with `inference.serverless.write` permissions)

4. **Start development server**
   ```bash
   pnpm dev
   ```

## Architecture

The application follows a clean, modern architecture:

- **Frontend**: Svelte 5 with runes for reactive state management
- **API**: SvelteKit serverless functions with built-in rate limiting
- **Styling**: Tailwind CSS with custom cyberpunk theme
- **Deployment**: Vercel with automatic builds from GitHub

## Rate limiting

The application implements IP-based rate limiting (2 requests per 5 minutes) to prevent abuse and manage API costs. This is handled in-memory and resets on server restart.

## Contributing

This is a personal project showcasing modern web development practices. Feel free to fork and experiment with your own modifications.

