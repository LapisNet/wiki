// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './custom.scss';
import giscus from '@giscus/vue';
import { registerComponents } from '../../components';

import QuickTools from './components/QuickTools.vue';

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
			'sidebar-nav-after': h(QuickTools),
			'doc-after': () => h(giscus, {
				class: 'giscus',
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
	enhanceApp({ app, router, siteData }) {
		registerComponents(app);
	}
} satisfies Theme;
