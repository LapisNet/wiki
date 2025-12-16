<script setup lang="ts">
defineProps<{
	page: string;
	title?: string;
}>();
</script>

<template>
	<a :href="`https://zh.wikipedia.org/wiki/${page}`" :title="`wzh:${page}`">
		{{ title ?? `wzh:${page}` }}
	</a>
</template>
