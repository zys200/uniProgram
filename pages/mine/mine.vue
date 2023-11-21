<template>
	<div class="box" v-if="isLog">
		<div class="user">
			<div class="imgsss">
				<image src="../../static/five.jpg" class="imgs" />
			</div>
			<div class="username">
				<text>hhh</text>
			</div>
		</div>
		<div class="order">
			<div class="top">
				<div class="title">我的订单</div>
				<div class="mgs">
					<a href="#">查看全部></a>
				</div>
			</div>
			<div class="orderContent">
				<div class="topContentItem">
					<image src="/static/iconfonts/gouwu1.png" class="tcimgs"></image>
					<text>待付款</text>
				</div>
				<div class="topContentItem">
					<image src="/static/iconfonts/gouwu1.png" class="tcimgs"></image>
					<text>待付款</text>
				</div>
				<div class="topContentItem">
					<image src="/static/iconfonts/gouwu1.png" class="tcimgs"></image>
					<text>待付款</text>
				</div>
				<div class="topContentItem">
					<image src="/static/iconfonts/gouwu1.png" class="tcimgs"></image>
					<text>待付款</text>
				</div>
				<div class="topContentItem">
					<image src="/static/iconfonts/gouwu1.png" class="tcimgs"></image>
					<text>待付款</text>
				</div>
			</div>
		</div>
		<div class="more">
			<div class="moreItem" @click="toAddress">
				<text>我的收获地址</text>
			</div>
			<div class="moreItem">
				<text>授权管理</text>
			</div>
			<div class="moreItem">
				<text>问题反馈</text>
			</div>
			<div class="moreItem">
				<text>联系我们</text>
			</div>
			<div class="moreItem">
				<text>关于小兔鲜</text>
			</div>
			<div class="moreItem" @click="outLogin">
				<text>退出登录</text>
			</div>
		</div>
		<u-action-sheet :actions="list" :show="show"></u-action-sheet>
	</div>
	<div class="outLog" v-else>
		<text @click="toLog">去登陆</text>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'

	let list = [{ name: '选项一', subname: "选项一描述", color: '#ffaa7f', fontSize: '20' }]
	let show = ref(false)
	let isLog = ref(false)

	onMounted(() => {
		uni.getStorage({
			key: 'userInfos',
			success() {
				isLog.value = true
			}
		})
	})
	const toAddress = function() {
		uni.navigateTo({
			url: "/pages/address/index"
		})
	}
	const outLogin = function() {
		uni.removeStorageSync('userInfos');
		isLog.value = false
	}
	const toLog = function() {
		uni.navigateTo({
			url: '/pages/login/login'
		});
	}
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.user {
			display: flex;
			flex-direction: row;
			margin: 0 10px;

			.imgsss {
				padding: 30px;
			}

			.imgs {
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}

			.username {
				height: 100px;
				line-height: 140px;
			}
		}

		.order {
			margin: 0 auto;
			width: 90%;
			border: 1px solid grey;
			border-radius: 10px;

			.top {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 0 10px;
				height: 30px;
				line-height: 30px;
			}

			.orderContent {
				display: flex;
				justify-content: space-around;
				width: 100%;

				.topContentItem {
					display: flex;
					flex-direction: column;
					text-align: center;

					.tcimgs {
						width: 60px;
						height: 60px;
					}
				}
			}
		}

		.more {
			margin-top: 50px;

			.moreItem {
				padding-left: 50px;
				width: 100%;
				height: 60px;
				line-height: 60px;
				border-top: 1px solid gray;
			}

			& .moreItem:nth-child(5) {
				border-bottom: 1px solid gray;
			}

			& .moreItem:last-child {
				margin: 0 auto;
				margin-top: 40px;
				padding-left: 0;
				width: 80%;
				height: 40px;
				line-height: 40px;
				color: #d9b;
				text-align: center;
				border: 1px solid gray;
				border-radius: 10px;
			}
		}
	}
</style>