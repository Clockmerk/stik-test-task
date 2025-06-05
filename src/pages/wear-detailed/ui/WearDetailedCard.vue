<script setup lang="ts">
import { mockWear } from '../model/mock-wear'
import UiImageSliper from '~/src/shared/ui/UiImageSlider.vue'
import UiAccordion from '~/src/shared/ui/UiAccordion.vue'
import { AddToCart } from '~/src/features/add-to-cart'
import { AddToFavorites } from '~/src/features/add-to-favorites'
import { WearOptions } from '~/src/features/wear-options'
import { useAppBreakpoints } from '~/src/shared/lib/composables/useAppBreakpoints'

const activeImageIndex = ref(0)

const { isTablet } = useAppBreakpoints()

const getSliderAttr = computed(() => {
	return isTablet.value
		? { width: '375px', height: '100%' }
		: { width: '518px', height: '693px' }
})
</script>

<template>
	<article class="wear-detailed-card">
		<div class="wear-detailed-card__preview">
			<img
				v-for="img of mockWear.images"
				:key="img"
				:src="img"
				:alt="mockWear.name"
				loading="lazy"
				fetchpriority="low"
				class="wear-detailed-card__preview-img"
				:class="{
					'wear-detailed-card__preview-img--active': img === mockWear.images[activeImageIndex],
				}"
				@click="activeImageIndex = mockWear.images.indexOf(img)"
			>
		</div>

		<ui-image-sliper
			v-model="activeImageIndex"
			:images="mockWear.images"
			:width="getSliderAttr.width"
			:height="getSliderAttr.height"
		/>

		<div class="wear-detailed-card__info">
			<div class="wear-detailed-card__info-header">
				<div class="wear-detailed-card__info-header-wrapper">
					<h2 class="wear-detailed-card__info-header-title">
						{{ mockWear.name }}
					</h2>
					<p> {{ mockWear.price }} RUB</p>
				</div>

				<add-to-favorites
					v-if="isTablet"
					class="wear-detailed-card__favorite"
				/>
			</div>

			<wear-options
				:wear-options="mockWear.options"
				class="wear-detailed-card__options"
			/>

			<div
				v-if="!isTablet"
				class="wear-detailed-card__actions"
			>
				<add-to-cart />
				<add-to-favorites />
			</div>

			<ui-accordion
				title="Описание"
				class="wear-detailed-card__accordion wear-detailed-card__description"
				without-bottom-border
			>
				<p>{{ mockWear.description }}</p>
			</ui-accordion>

			<ui-accordion
				title="Состав и уход"
				class="wear-detailed-card__accordion"
			>
				{{ mockWear.compound }}
			</ui-accordion>
		</div>
	</article>
</template>

<style lang="scss" scoped>
.wear-detailed-card {
	display: flex;
	gap: 30px;
	justify-content: center;

	@include breakpoint($breakpoint-md, down) {
		flex-direction: column;
	}

	&__preview {
		display: flex;
		flex-direction: column;
		gap: 4px;

		@include breakpoint($breakpoint-md, down) {
			display: none;
		}

		&-img {
			width: 70px;
			height: 87px;
			cursor: pointer;

			&--active {
				opacity: 0.5;
			}
		}
	}

	&__info {
		padding-inline: 16px;
		margin-left: 31px;

		@include breakpoint($breakpoint-md, down) {
			margin-left: 0;
		}

		&-header {
			position: relative;
			display: flex;
			justify-content: space-between;
			font-size: 12px;
			font-weight: 400;

			&-wrapper {
				display: flex;
				flex-direction: column;
				gap: 8px;
			}

			&-title {
				font-size: 12px;
				font-weight: 400;
			}
		}
	}

	&__options {
		margin-top: 31px;
	}

	&__actions {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 36px;
	}

	&__favorite {
		position: relative;
		top: -17px;
	}

	&__description {
		margin-top: 32px;
	}

	&__accordion {
		max-width: 360px;
	}
}
</style>
