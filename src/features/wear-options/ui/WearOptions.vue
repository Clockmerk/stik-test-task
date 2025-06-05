<script setup lang="ts">
import { WearOptions } from '../model/types'

const props = defineProps<{
	wearOptions: WearOptions.WearOptionsDto
}>()

const activeColor = ref(props.wearOptions.colors[0].name)

const getQuanityStr = (quantity: WearOptions.WearQuantityEnum) => {
	switch (quantity) {
		case WearOptions.WearQuantityEnum.ZERO:
			return 'подписка'
		case WearOptions.WearQuantityEnum.LOW:
			return 'мало'
		default:
			return ''
	}
}
</script>

<template>
	<div class="wear-options">
		<div class="wear-options__sizes">
			Размеры
			<ul class="wear-options__sizes-list">
				<li
					v-for="size in wearOptions.sizes"
					:key="size.name"
					class="wear-options__sizes-list-item"
					:class="{
						'wear-options__sizes-list-item--disabled':
							size.quantity === WearOptions.WearQuantityEnum.ZERO,
					}"
				>
					<button class="wear-options__sizes-list-item-btn">
						{{ size.name }}
					</button>
					<span class="wear-options__sizes-list-item-size">{{ getQuanityStr(size.quantity) }}</span>
				</li>
			</ul>
		</div>

		<div class="wear-options__colors">
			Цвет: {{ activeColor }}
			<ul class="wear-options__colors-list">
				<li
					v-for="color in wearOptions.colors"
					:key="color.name"
					class="wear-options__colors-list-item"
					:class="{
						'wear-options__colors-list-item--active':
							activeColor === color.name,
					}"
					@click="activeColor = color.name"
				>
					<button
						class="wear-options__colors-list-item-btn"
						:style="{
							backgroundColor: color.color,
							border: color.name === 'Белый' ? '1px solid #E5E5E5' : 'none',
						}"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wear-options {
	display: flex;
	flex-direction: column;
	gap: 36px;

	@include breakpoint($breakpoint-md) {
		gap: 34px;
	}

	&__sizes {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 10px;

		&-list {
			display: flex;
			gap: 14px;

			&-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 3px;

				&--disabled {
					opacity: 0.5;
				}

				&-btn {
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid $black-middle;
					width: 65px;
					height: 31px;
				}

				&-size {
					color: $gray-middle;
				}
			}
		}
	}

	&__colors {
		display: flex;
		flex-direction: column;
		gap: 6px;
		font-size: 10px;

		&-list {
			display: flex;
			align-items: center;
			gap: 13px;

			&-item {
				display: flex;
				flex-direction: column;
				gap: 3px;
				padding-inline: 3px;
				padding-bottom: 3px;

				&--active {
					border-bottom: 1px solid $gray-dark;
				}

				&-btn {
					width: 28px;
					height: 28px;
				}
			}
		}
	}
}
</style>
