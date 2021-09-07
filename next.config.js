const withImages = require('next-images')
const withPWA = require('next-pwa')

module.exports = withPWA(withImages({
	esModule: true,
	images: {
		domains: [
			process.env.NEXT_PUBLIC_API_HOSTNAME
		]
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development'
	}
}))