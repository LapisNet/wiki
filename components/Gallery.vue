<script setup lang="ts">
defineProps<{
	images: { url: string, title?: string, alt?: string }[];
}>();
</script>

<template>
	<ul :class="$style.gallery">
		<li :class="$style['gallery-image']" v-for="image in images" :key="image.url">
			<img :src="image.url" :title="image.title ?? ''" :alt="image.alt ?? image.title ?? ''" />
			<span>{{ image.title }}</span>
		</li>
	</ul>
</template>

<style lang="scss" module>
.gallery {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1rem;

	.gallery-image {
		display: flexbox;
	}
}
</style>
