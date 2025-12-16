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
		logo: '/favicon.ico',
		nav: [],

		externalLinkIcon: true,

		editLink: {
			pattern: 'https://github.com/LapisNet/wiki/edit/main/wiki/:path'
		},

		footer: {
			copyright: 'Copyright © 2025-present LapisNet Wiki'
		},

		docFooter: {
			prev: false,
			next: false
		},

		search: {
			provider: 'local'
		},

		sidebar: [],

		socialLinks: [
			{ icon: 'bilibili', link: 'https://space.bilibili.com/5308176' },
			{ icon: 'qq', link: 'https://qm.qq.com/q/i0F8L4P1jW' },
			{ icon: 'github', link: 'https://github.com/LapisNet/wiki' },
			{ icon: 'discord', link: 'https://discord.gg/m6BwyRp7Mv' }
		]
	}
})
