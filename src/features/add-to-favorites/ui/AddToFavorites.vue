<script setup lang="ts">
import { LocalIcons } from '~/src/shared/icons'
</script>

<template>
	<button
		class="add-to-favorite"
	>
		<icon
			:name="LocalIcons.BOOKMARK"
			class="add-to-favorite__icon"
		/>
	</button>
</template>

<style lang="scss" scoped>
.add-to-favorite {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 44px;
	width: 44px;
	border: 1px solid $black-dark;

	@include breakpoint($breakpoint-md, down) {
		border: none;
	}

	&__icon {
		width: 24px;
		height: 24px;
	}
}
</style>
