<script setup lang="ts">
definePageMeta({
	layout: 'default',
})
</script>

<template>
	<div>
		<h1>
			Запрашиваемая страница не найдена
		</h1>

		<p>
			Возможно, вы ошиблись в адресе страницы или она вообще никогда не существовала. Попробуйте перейти на
			главную.
		</p>

		<button to="/">
			Перейти на главную
		</button>
	</div>
</template>
