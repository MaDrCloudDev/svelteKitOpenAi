export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e7537cee.js","imports":["_app/immutable/entry/start.e7537cee.js","_app/immutable/chunks/index.a822744d.js","_app/immutable/chunks/singletons.10a7c44e.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b1ac4587.js","imports":["_app/immutable/entry/app.b1ac4587.js","_app/immutable/chunks/index.a822744d.js"],"stylesheets":[],"fonts":[]}},
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
