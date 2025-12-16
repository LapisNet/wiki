<script setup lang="ts">
defineProps<{
	page: string;
	title?: string;
}>();
</script>

<template>
	<a :href="`https://wikipedia.org/wiki/${page}`" :title="`wikipedia:${page}`">
		{{ title ?? `wikipedia:${page}` }}
	</a>
</template>
