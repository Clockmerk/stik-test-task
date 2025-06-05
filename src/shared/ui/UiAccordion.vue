<script setup lang="ts">
import { ref } from 'vue'
import { LocalIcons } from '../icons'

defineProps<{
	title: string
	withoutBottomBorder?: boolean
}>()

const isOpen = ref(false)

const toggle = () => {
	isOpen.value = !isOpen.value
}
</script>

<template>
	<div
		class="accordion"
		:class="{ 'accordion--without-bottom-border': withoutBottomBorder }"
	>
		<div
			class="accordion__header"
			@click="toggle"
		>
			<h3 class="accordion__title">
				{{ title }}
			</h3>
			<div
				class="accordion__icon"
				:class="{ 'accordion__icon--is-open': isOpen }"
			>
				<icon
					:name="LocalIcons.PLUS"
					class="accordion__icon-svg"
				/>
			</div>
		</div>
		<div
			v-show="isOpen"
			class="accordion__content"
		>
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.accordion {
  border-top: 1px solid $gray-lighter;
  border-bottom: 1px solid $gray-lighter;

  &--without-bottom-border {
    border-bottom: none;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 14px;
	padding-right: 7px;
    cursor: pointer;
  }

  &__title {
    font-size: 10px;
	font-weight: 400;
  }

  &__icon {
    transform: rotate(0);
    transition: transform 0.3s;

    &--is-open {
      transform: rotate(45deg);
    }
  }

  &__icon-svg {
	height: 12px;
	width: 12px;
  }

  &__content {
    padding: 14px 7px;
	font-size: 10px;
  }
}
</style>
