import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: 'wiki',

	title: 'LapisNet Wiki',
	description: '',

	lastUpdated: true,
	cleanUrls: true,
	metaChunk: true,

	rewrites: {
		'zh/:rest*': ':rest*'
	},

	locales: {
		root: {
			label: '简体中文',
			lang: 'zh'
		}
	},

	markdown: {
		config(md) {
			// TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
			const fence = md.renderer.rules.fence!
			md.renderer.rules.fence = function (tokens, idx, options, env, self) {
				const { localeIndex = 'root' } = env
				const codeCopyButtonTitle = (() => {
					switch (localeIndex) {
						case 'es':
							return 'Copiar código'
						case 'fa':
							return 'کپی کد'
						case 'ko':
							return '코드 복사'
						case 'pt':
							return 'Copiar código'
						case 'ru':
							return 'Скопировать код'
						case 'zh':
							return '复制代码'
						case 'ja':
							return 'コードをコピー'
						default:
							return 'Copy code'
					}
				})()
				return fence(tokens, idx, options, env, self).replace(
					'<button title="Copy Code" class="copy"></button>',
					`<button title="${codeCopyButtonTitle}" class="copy"></button>`
				)
			}
		}
	},

	themeConfig: {
		logo: '/public/favicon.ico',
		nav: [],

		externalLinkIcon: true,

		editLink: {
			pattern: 'https://github.com/LapisNet/wiki/edit/main/wiki/:path'
		},

		footer: {
			message: '除非另有声明，本网站内容采用 CC BY-SA 4.0 授权',
			copyright: 'Copyright © 2025-present LapisNet Wiki'
		},

		search: {
			provider: 'local'
		},

		sidebar: []
	}
})
