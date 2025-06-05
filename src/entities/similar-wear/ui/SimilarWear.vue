<script setup lang="ts">
import { similarWearList } from '../model/similar-wear'
import SimilarWearCard from './SimilarWearCard.vue'
</script>

<template>
	<section class="similar-wear">
		<h2 class="similar-wear__title">
			ПОХОЖИЕ ТОВАРЫ
		</h2>

		<ul class="similar-wear__list">
			<li
				v-for="item in similarWearList"
				:key="item.id"
			>
				<similar-wear-card :item />
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
.similar-wear {
	padding-inline: 40px;
	display: flex;
	flex-direction: column;
	gap: 31px;

	@include breakpoint($breakpoint-md, down) {
		padding-inline: 16px;
	}

	&__title {
		font-size: 12px;
		font-weight: 400;
	}

	&__list {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;

		@include breakpoint($breakpoint-md, down) {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(167px, 1fr));
		}
	}
}
</style>
