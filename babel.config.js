module.exports = api => {
	api.cache(true)
	return {
		presets: [
			['@babel/preset-typescript', { allExtensions: true }],
			['@babel/preset-env'],
		],
	}
}
