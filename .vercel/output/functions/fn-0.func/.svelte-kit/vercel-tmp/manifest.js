export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.2e034734.js","imports":["_app/immutable/entry/start.2e034734.js","_app/immutable/chunks/index.fe9ef46a.js","_app/immutable/chunks/singletons.4f37e813.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.57e4a81d.js","imports":["_app/immutable/entry/app.57e4a81d.js","_app/immutable/chunks/index.fe9ef46a.js"],"stylesheets":[],"fonts":[]}},
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
