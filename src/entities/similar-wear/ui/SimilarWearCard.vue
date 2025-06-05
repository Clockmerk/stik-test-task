<script setup lang="ts">
import type { SimilarWear } from '../model'

const props = defineProps<{
	item: SimilarWear.ItemDto
}>()
</script>

<template>
	<nuxt-link
		:to="`/wear/${item.id}`"
		class="similar-wear-card"
	>
		<img
			class="similar-wear-card__image"
			:src="item.mainImage"
			:alt="item.name"
			loading="lazy"
			fetchpriority="low"
		>

		<div class="similar-wear-card__info">
			<h3 class="similar-wear-card__info-title">
				{{ item.name.toLocaleLowerCase() }}
			</h3>

			<p class="similar-wear-card__info-price">
				<span v-if="props.item.newPrice">
					{{ item.newPrice }} RUB
				</span>

				<s
					v-if="props.item.newPrice"
					class="similar-wear-card__info-price-old"
				>{{ item.price }} RUB</s>
				<span v-else>
					{{ item.price }} RUB
				</span>
			</p>
		</div>
	</nuxt-link>
</template>

<style lang="scss" scoped>
.similar-wear-card {
	display: flex;
	flex-direction: column;
	gap: 15px;

	&__image {
		width: 333px;
		height: 444px;

		@include breakpoint($breakpoint-md, down) {
			width: 168px;
			height: 222px;
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding-left: 15px;

		@include breakpoint($breakpoint-md, down) {
			padding-left: 7px;
		}

		&-title {
			font-size: 10px;
			font-weight: 400;
		}

		&-price {
			display: flex;
			align-items: center;
			gap: 10px;
			font-size: 10px;

			&-old {
				color: $gray-middle;
			}
		}
	}
}
</style>
