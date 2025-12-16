<script setup lang="ts">
import type { VNode } from 'vue';
defineProps<{
	content: string | VNode;
}>();
</script>

<template>
	<span class="hide" title="你知道的太多了" v-if="typeof content === 'string'">{{ content }}</span>
	<component class="hide" title="你知道的太多了" v-else :is="content" />
</template>

<style lang="scss" scoped>
.hide {
	background-color: var(--vp-c-text-1);
	transition: .2s;
	&:hover {
		background-color: inherit;
	}
}
</style>
