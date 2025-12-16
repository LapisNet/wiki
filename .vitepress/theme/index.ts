// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import giscus from '@giscus/vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			'doc-after': () => h(giscus, {
				repo: 'LapisNet/wiki',
				repoId: 'R_kgDOQpR-oA',
				category: 'comments',
				categoryId: 'DIC_kwDOQpR-oM4Cz1RV',
				mapping: 'title',
				strict: '1',
				reactionsEnabled: '1',
				emitMetadata: '0',
				inputPosition: 'top',
				theme: 'preferred_color_scheme',
				lang: 'zh-CN',
				loading: 'lazy'
			})
		});
	},
	enhanceApp({ app, router, siteData }) {}
} satisfies Theme;
