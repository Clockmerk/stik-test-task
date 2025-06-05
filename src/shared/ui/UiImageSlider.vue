<script setup lang="ts">
import { LocalIcons } from '../icons'
import { useAppBreakpoints } from '../lib/composables/useAppBreakpoints'

const { isTablet } = useAppBreakpoints()

const props = defineProps<{
	images: string[]
	width?: string
	height?: string
}>()

const model = defineModel<number>({ required: true })

const prevSlide = () => {
	if (model.value === 0) {
		return
	} else {
		model.value--
	}
}

const nextSlide = () => {
	if (model.value === props.images.length - 1) {
		return
	} else {
		model.value++
	}
}

const setIndex = (index: number) => {
	model.value = index
}
</script>

<template>
	<div class="image-slider">
		<div class="image-slider__slider">
			<img
				:src="images[model]"
				:alt="`Image ${images[model]}`"
				class="image-slider__slider-image"
				loading="lazy"
				fetchpriority="low"
				:style="{
					width: props.width,
					height: props.height,
				}"
			>
		</div>
		<button
			class="image-slider__prev-btn"
			:class="{
				'image-slider__prev-btn--disabled': model === 0,
			}"
			@click="prevSlide"
		>
			<icon
				:name="LocalIcons.ARROW_LEFT"
				class="image-slider__prev-btn-icon"
			/>
		</button>
		<button
			class="image-slider__next-btn"
			:class="{
				'image-slider__next-btn--disabled': model === images.length - 1,
			}"
			@click="nextSlide"
		>
			<icon
				:name="LocalIcons.ARROW_RIGHT"
				class="image-slider__next-btn-icon"
			/>
		</button>
		<div
			v-if="isTablet"
			class="image-slider__dots"
		>
			<button
				v-for="(_, index) in images.length"
				:key="index"
				class="image-slider__dot"
				:class="{
					'image-slider__dot--active': index === model,
				}"
				@click="setIndex(index)"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.image-slider {
	position: relative;
	width: fit-content;
    display: flex;
    justify-content: center;
    align-self: center;

	&__prev-btn,
	&__next-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		background: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		width: 32px;
		height: 32px;
	}

	&__prev-btn {
		left: 16px;

		&-icon {
			width: 10px;
			height: 15px;
		}
	}

	&__next-btn {
		right: 16px;

		&-icon {
			width: 10px;
			height: 15px;
		}
	}

	&__prev-btn--disabled,
	&__next-btn--disabled {
		cursor: default;

		.image-slider__next-btn-icon,
		.image-slider__prev-btn-icon  {
			color: $gray-light;
		}
	}

	&__dots {
		position: absolute;
		bottom: 17px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
		gap: 6px;
	}

	&__dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		cursor: pointer;
		opacity: 0.4;
		background: $white;

		&--active {
			opacity: 1;
		}
	}
}
</style>
