<template>
	<div class="box">
		<div class="topbox" :style="{marginTop: safeAreaInsets.top + 'px'}">
			<div class="title">
				<text>小商城</text>
			</div>
			<div class="order">
				<text class="txt">新鲜</text>
				<text class="txt">新鲜</text>
				<text class="txt">新鲜</text>
			</div>
		</div>
		<div class="search">
			<input type="text" class="inp" placeholder="请输入内容..." placeholder-style="color: whitesmoke" />
			<text class="iconfont icon-saoyisao"></text>
		</div>
	</div>
</template>

<script setup>
	let { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<style scoped>
	.box {
		overflow: hidden;
		width: 100%;
		background-color: #d9b;
	}

	.topbox {
		display: flex;
		position: relative;
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.topbox::after {
		content: '';
		position: absolute;
		top: 7px;
		left: 115px;
		width: 0px;
		height: 36px;
		border-right: 1px solid whitesmoke;
	}

	.topbox .title {
		width: 120px;
		font-size: 26px;
		text-align: center;
	}

	.order .txt {
		font-size: 18px;
		padding: 0 10px;
	}

	.search {
		display: flex;
		margin-left: 10px;
	}

	.search .inp {
		position: relative;
		padding-left: 52px;
		margin-bottom: 5px;
		width: 80%;
		height: 40px;
		border: 1px solid whitesmoke;
		border-radius: 20px;
	}

	.search .inp::before {
		content: "\e651";
		position: absolute;
		top: 7px;
		left: 16px;
		font-family: iconfont;
		font-size: 26px;
		color: aliceblue;
	}

	.icon-saoyisao {
		margin-left: 10px;
		width: 40px;
		height: 50px;
		color: aliceblue;
		font-size: 30px;
		line-height: 42px;
	}
</style>