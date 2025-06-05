// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@vueuse/nuxt'],

	devtools: { enabled: true },

	app: {
		head: {
			htmlAttrs: {
				lang: 'ru',
			},

			title: 'Stik | Магазин женской одежды',

			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content:
						'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0',
				},
			],

			link: [{ rel: 'icon', href: '/favicon.ico' }],
		},
	},

	dir: {
		layouts: './app/layouts',
	},

	compatibilityDate: '2025-05-15',

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/app/styles/scss/core.scss" as *;',
				},
			},
		},
	},

	typescript: {
		typeCheck: true,
	},

	eslint: {
		checker: true,
		config: {
			typescript: true,
			stylistic: {
				indent: 'tab',
				semi: false,
				quotes: 'single',
				commaDangle: 'always-multiline',
				braceStyle: '1tbs',
			},
		},
	},

	icon: {
		customCollections: [
			{
				prefix: 'local',
				dir: './src/shared/icons/local',
				normalizeIconName: false,
			},
		],
	},
})
