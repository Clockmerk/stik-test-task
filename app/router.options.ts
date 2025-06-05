import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/
// https://router.vuejs.org/guide/essentials/route-matching-syntax.html
export default {
	scrollBehaviorType: 'smooth',
	// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
	routes: (routes) => [
		...routes,
		{
			path: '/',
			component: () => import('~/src/pages/wear-detailed/ui/WearDetailed.vue'),
		},
		{
			name: 'not-found',
			path: '/:pathMatch(.*)*',
			component: () => import('./[...slug].vue'),
		}],
} satisfies RouterConfig
