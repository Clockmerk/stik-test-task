<script setup lang="ts">
import WearDetailedCard from './WearDetailedCard.vue'
import SimilarWear from '~/src/entities/similar-wear/ui/SimilarWear.vue'
</script>

<template>
	<wear-detailed-card />
	<similar-wear class="wear-detailed__similar-wear" />
</template>

<style lang="scss" scoped>
	.wear-detailed {
		&__similar-wear {
			margin-top: 42px;

			@include breakpoint($breakpoint-md) {
				margin-top: 40px;
			}
		}
	}
</style>
