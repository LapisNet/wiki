<script setup lang="ts">
import { h } from 'vue';
const props = defineProps<{
	info: {
		[key: string]: any;
		/** 真实姓名 */
		real_name?: string;
		/** 出生日期 */
		birthday?: string;
		/** 职业 */
		occupation?: string;
		/** 国籍 */
		nationality?: string;
		/** 语言 */
		languages?: string;
		/** 配偶 */
		spouse?: string;
		/** 子女 */
		children?: string;
		/** 网站 */
		website?: string;
		/** 闻名因 */
		known_for?: string;
		/** 别名 */
		also_known_as?: string;
		/** 哔哩哔哩 UID (配合 `bilibili` 使用) */
		buid?: number | string;
		/** 哔哩哔哩 (配合 `buid` 使用) */
		bilibili?: string;
		/** QQ 号 */
		qq?: number | string;
		/** X (Twitter) */
		twitter?: string;
		twitter2?: string;
		/** GitHub 档案 */
		github?: string;
		/** Minecraftforum.net 用户名 */
		forum_name?: string;
		/** 漏洞追踪器用户名 */
		bug_tracker?: string;
		/** Minecraft 用户名 */
		minecraft_name?: string;
		/** 签名 */
		signature?: string;
		/** 掉落物 */
		drops?: string;
		/** 经验值 */
		exp?: number | string;
		/** 维基百科用户名 */
		ZhWikipediaUser?: string;
		/** Wikipedia 用户名 */
		EnWikipediaUser?: string;

		image?: string;
		imagesize?: string;
		footer?: string;
	}
}>();
const title = document.title.split(' | ')[0];
const createAnchor = (href: string, text?: string) => h('a', { href, target: '_blank',
	  rel: 'noopener' }, text ?? href);
const infos = [
	{ label: '真实姓名', value: props.info.real_name },
	{ label: '出生日期', value: props.info.birthday },
	{ label: '职业', value: props.info.occupation },
	{ label: '国籍', value: props.info.nationality },
	{ label: '语言', value: props.info.languages },
	{ label: '配偶', value: props.info.spouse },
	{ label: '子女', value: props.info.children },
	{ label: '网站', value: createAnchor(props.info.website!) },
	{ label: '闻名因', value: props.info.known_for },
	{ label: '别名', value: props.info.also_known_as },
	{ label: '哔哩哔哩', value: props.info.buid?
		createAnchor(`https://space.bilibili.com/${props.info.buid}`,
		props.info.bilibili): props.info.bilibili },
	{ label: 'QQ 号', value: props.info.qq },
	{ label: 'X (Twitter)', value: props.info.twitter && h('span', {}, [
		createAnchor(`https://x.com/${props.info.twitter}`, props.info.twitter),
		h('br'),
		props.info.twitter2 &&
		createAnchor(`https://x.com/${props.info.twitter2}`, props.info.twitter2)
	]) },
	{ label: 'GitHub 档案', value: props.info.github &&
		createAnchor(`https://github.com/${props.info.github}`, props.info.github) },
	{ label: 'Minecraftforum.net 用户名', value: props.info.forum_name && createAnchor(
		`https://minecraftforum.net/members/${props.info.forum_name}`, props.info.forum_name) },
	{ label: '漏洞追踪器用户名', value: props.info.bug_tracker && createAnchor(
		`https://bugs.mojang.com/secure/ViewProfile.jspa?name=${props.info.bug_tracker}`,
		props.info.bug_tracker ) },
	{ label: 'Minecraft 用户名', value: props.info.minecraft_name &&
		createAnchor(`https://mine.ly/${props.info.minecraft_name}`, props.info.minecraft_name) },
	{ label: '签名', value: props.info.signature },
	{ label: '掉落物', value: props.info.drops },
	{ label: '经验值', value: props.info.exp },
	{ label: '维基百科用户名', value: props.info.ZhWikipediaUser &&
		createAnchor(`https://zh.wikipedia.org/wiki/User:${props.info.ZhWikipediaUser}`) },
	{ label: 'Wikipedia 用户名', value: props.info.EnWikipediaUser &&
		createAnchor(`https://www.wikipedia.org/wiki/User:${props.info.EnWikipediaUser}`) }
];
</script>

<template>
	<div class="infobox">
		<div class="infobox-title">{{ title }}</div>
		<div class="infobox-imagearea" v-if="info.image">
			<a class="no-icon" :href="info.image">
				<img :src="info.image" :alt="title" :title="title"
					 :width="info.imagesize || 150" :height="info.imagesize || 150" />
			</a>
		</div>
		<div class="infobox-infos">
			<template v-for="i of infos">
				<div class="infobox-info" v-if="i.value">
					<span class="infobox-info-label">{{ i.label }}</span>
					<span v-if="typeof i.value !== 'object'" class="infobox-info-value">{{ i.value }}</span>
					<component v-else class="infobox-info-value" :is="i.value" />
				</div>
			</template>
		</div>
		<div class="infobox-footer" v-if="info.footer">{{ info.footer }}</div>
	</div>
</template>

<style lang="scss" scoped>
.infobox {
	float: inline-end;
	margin-top: 8px;
	margin-left: 8px;
	width: 300px;
	font-size: 80%;
	overflow: auto;
	background-color: var(--vp-c-gray-3);
	border: 1px solid var(--vp-c-border);

	.infobox-title {
		color: var(--vp-c-neutral);
		background-color: #0bf;
		padding: 6px;
		font-size: 1.5em;
		font-weight: bold;
		text-align: center;
	}

	.infobox-imagearea {
		text-align: center;
		img {
			margin: auto;
			padding: 4px;
		}
	}

	.infobox-infos {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 1px;
		border-top: 1px solid var(--vp-c-border);
		border-bottom: 1px solid var(--vp-c-border);

		.infobox-info {
			display: contents;
			
			* {
				padding: 4px;
				word-break: keep-all;
			}
			.infobox-info-label {
				font-weight: bold;
			}

			&:nth-child(1n) * {
				background-color: var(--vp-c-gray-1);
			}
			&:nth-child(2n) * {
				background-color: var(--vp-c-gray-2);
			}
		}
	}

	.infobox-footer {
		text-align: center;
	}

	@media (max-width: 768px) {
		margin: 8px 0;
		float: none;
		width: 100%;
	}
}
</style>
