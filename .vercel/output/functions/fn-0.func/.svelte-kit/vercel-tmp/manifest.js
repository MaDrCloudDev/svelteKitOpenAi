export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.f3e19d4f.js","imports":["_app/immutable/entry/start.f3e19d4f.js","_app/immutable/chunks/index.e839a3cc.js","_app/immutable/chunks/singletons.0bfb2d1e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.e0979740.js","imports":["_app/immutable/entry/app.e0979740.js","_app/immutable/chunks/index.e839a3cc.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
