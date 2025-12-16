<script setup lang="ts">
import { useData } from 'vitepress';
const props = defineProps<{
	section?: boolean;
	1?: string;
}>();
const { theme, page } = useData();
</script>

<template>
	<div class="wip-box">
		<img class="wip-icon" src="/Iron_Pickaxe.png" />
		<div class="wip-content">
			<span class="wip-title">该{{ section? '章节': '页面' }}的编辑正在进行中。</span>
			<span class="wip-text">
				请帮助我们<a class="no-icon" :href="theme.editLink.pattern.replace(':path', page.filePath)">扩充或改进</a>它。
				<span v-if="props[1]"><br />附加说明：<i>{{ props[1] }}</i></span>
			</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wip-box {
	padding: 6px;
	width: 100%;
	display: flex;
	align-items: center;
	color: var(--vp-c-neutral);
	background-color: #5d58;
	border-left: 8px solid #5d5;

	.wip-icon {
		width: 32px;
		height: 32px;
		margin: 4px;
	}

	.wip-content {
		display: flex;
		flex-direction: column;
		font-size: 16px;

		.wip-title {
			font-weight: bold;
		}

		.wip-text a {
			color: var(--vp-c-brand-1);
		}
	}
}
</style>
