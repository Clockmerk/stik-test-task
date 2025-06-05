<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
	error: NuxtError
}>()
</script>

<template>
	<nuxt-layout>
		<div>
			<h1>
				Страница не найдена
			</h1>
			<div>
				К сожалению, запрашиваемой страницы не существует.
				Возможно, она была удалена или ссылка на неё устарела.
			</div>
			<button @click="$router.push('/')">
				Вернуться на главную
			</button>
		</div>
	</nuxt-layout>
</template>
