<script setup lang="ts">
import type { VNode } from 'vue';
defineProps<{
	content: string | VNode;
	title?: string;
}>();
</script>

<template>
	<span :class="$style.hide" :title="title || '你知道的太多了'" v-if="typeof content === 'string'"
		  v-html="content" />
	<component :class="$style.hide" :title="title || '你知道的太多了'" v-else :is="content" />
</template>

<style lang="scss" module>
.hide {
	background-color: var(--vp-c-text-1);
	transition: .2s;
	&:hover {
		background-color: inherit;
	}
}
</style>
