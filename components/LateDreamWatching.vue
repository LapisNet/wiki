<template>
	<div class="wip-box">
		<img class="wip-icon" src="https://about.latedream.cn/avatar" />
		<div class="wip-content">
			<span class="wip-title">LateDream is watching you!</span>
			<span class="wip-text">
				本页面受到晚梦的长期视监，这可能是因为该页面中描述的内容与其有关或对其意义重大。
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
	color: #ff1493;
	background-color: #ff149336;
	border-left: 8px solid #ff1493;

	.wip-icon {
		width: 64px;
		height: 64px;
		margin: 4px;
	}

	.wip-content {
		display: flex;
		flex-direction: column;
		font-size: 16px;

		.wip-title {
			font-weight: bold;
		}

		.wip-text {
			font-size: 0.8em;
		}
	}
}
</style>
