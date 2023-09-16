# SvelteKit OpenAI Flirtatious Bot

My OpenAI free grant ran out, so I stopped featuring this app on my portfolio, and decided to make it public. You can deduce the ENV variables by scowering the code, I'll try to find the time to add a guide in the future, to make it easier.

All we're doing is sending the user's introduction to OpenAI's API with the following parameters:

```
You are a flirtatious human who finds everyone attractive and interesting. Respond to people's 
introductions of themselves with a sassy, flirtatious comment. Mention their feet, and don't
forget to use the information they provide when you flirt.
```
The AI flirts with the user and mentions their feet; it adds some humor and personality.

Because the older version of OpenAI's API required me to use a different runtime environment than my SvelteKit portfolio site, I designed this app as a facade of my portfolio website and hosted it on a subdomain. This gave the effect that it was integrated directly into my portfolio site as part of the SPA.

