<script setup lang="ts">
import { navList, navListMobile } from './model/nav-list'

const props = defineProps<{
	isCartOnly?: boolean
	isLeftNav?: boolean
}>()

const list = computed(() =>
	props.isCartOnly
		? navList.filter((item) => item.href === '/cart')
		: props.isLeftNav
			? navListMobile
			: navList,
)
</script>

<template>
	<nav class="header-nav">
		<ul class="header-nav__list">
			<li
				v-for="item of list"
				:key="item.href"
				class="header-nav__list-item"
			>
				<nuxt-link
					:to="item.href"
					class="header-nav__list-item-link"
				>
					<icon
						:name="item.icon"
						class="header-nav__list-item-icon"
					/>
				</nuxt-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped>
.header-nav {
	&__list {
		display: flex;
		align-items: center;
		gap: 16px;

		&-item {
			height: 20px;
			width: 20px;

			&-icon {
				height: 20px;
				width: 20px;
				transition: color 0.3s;

				&:hover {
					color: $black-middle;
				}
			}
		}
	}
}
</style>
