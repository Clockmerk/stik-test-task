<script setup lang="ts">
import TheHeaderNav from './TheHeaderNav.vue'
import { useAppBreakpoints } from '~/src/shared/lib/composables/useAppBreakpoints'

const { isTablet } = useAppBreakpoints()
</script>

<template>
	<header class="header">
		<the-header-nav
			v-if="isTablet"
			is-left-nav
		/>

		<nuxt-link
			to="/"
			class="header__logo"
		>
			<img
				src="/svg/logo.svg"
				alt="STIK logo"
				class="header__logo-img"
			>
		</nuxt-link>

		<the-header-nav
			class="header-nav--mobile"
			:is-cart-only="isTablet"
		/>
	</header>
</template>

<style lang="scss" scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 33px 48px;
	height: 86px;
	background: $white;

	@include breakpoint($breakpoint-md, down) {
		padding: 16px;
		height: 50px;
	}

	&__logo {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;

		&-img {
			@include breakpoint($breakpoint-md, down) {
				width: 38px;
				height: 17px;
			}
		}
	}

	&-nav {
		&--mobile {
			@include breakpoint($breakpoint-md) {
				margin-left: auto;
			}
		}
	}
}
</style>
