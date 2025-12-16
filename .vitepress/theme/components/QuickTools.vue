<script setup lang="ts">
import { useData } from 'vitepress';
const { page, theme } = useData();
const items = [
	{ text: '查看源码', link: `https://github.com/LapisNet/wiki/blob/main/${page.value.filePath}?plain=1` },
	{ text: '编辑页面', link: `https://github.com/LapisNet/wiki/edit/main/${page.value.filePath}` },
	{ text: '删除页面', danger: true, link: `https://github.com/LapisNet/wiki/delete/main/${page.value.filePath}` },
	{ text: '页面日志', link: `https://github.com/LapisNet/wiki/commits/main/${page.value.filePath}` }
];
</script>

<template>
	<div class="quick-tools">
		<h2>快捷操作</h2>
		<div v-for="item of items" class="tool-item" :data-danger="!!item.danger">
			<a class="vp-external-link-icon" :href="item.link" target="_blank">
				{{ item.text }}
			</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.quick-tools {
	border-top: 1px solid var(--vp-c-divider);
	margin-bottom: 1.25em;
	padding: 14px 0;
	font-size: 14px;
	line-height: 24px;
	width: 100%;
	h2 {
		padding: 4px 0;
		color: var(--vp-c-text-1);
		font-weight: bold;
	}
	.tool-item {
		padding: 4px 0;
		color: var(--vp-c-text-2);
		font-weight: 500;
		transition: color 0.2s;
		a {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&:hover {
			color: var(--vp-c-brand-1);
			&[data-danger="true"] {
				color: var(--vp-c-danger-2);
			}
		}
	}
}
</style>
