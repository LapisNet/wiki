<script setup lang="ts">
defineProps<{
	page: string;
	title?: string;
}>();
</script>

<template>
	<a :href="`https://zh.minecraft.wiki/wiki/${page}`" :title="`mcw:${page}`">
		{{ title ?? `mcw:${page}` }}
	</a>
</template>
