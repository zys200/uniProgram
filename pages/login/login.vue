<template>
	<div class="box">
		<div class="logo">
			<image class="logoImg" src="../../static/iconfonts/gouwu1.png"></image>
		</div>
		<div class="login">
			<input class="inp" v-model="userInfo.account" placeholder="请输入账号" type="text" />
			<input class="inp" v-model="userInfo.password" placeholder="请输入密码" type="password" />
			<button class="loginBtn" @click="tologin">点击登录</button>
		</div>
		<div class="order">
			<div class="orderItem" @click="orderLogin">其他方式登录</div>
		</div>
		<div class="botm">
			<text>欢迎来到我的代码</text>
		</div>
	</div>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	import {
		login
	} from '../../request/resInstance.ts'

	let userInfo = ref({
		account: '13123456789',
		password: '123456'
	})

	const tologin = function() {
		if (!userInfo.value) {
			console.log('请输入账号密码');
			return
		}
		let agms = JSON.stringify(userInfo.value)
		login(agms).then(res => {
			console.log(res);
			if (res.code === '1') {
				console.log('登录成功,准备跳转!');
				uni.switchTab({
					url: "/pages/index/index",
				})
				uni.setStorage({
					key: 'userInfos',
					data: res.result.token
				})
				return
			} else if (res.code === '10017') {
				uni.showToast({
					title: '账号或密码错误',
					icon: 'error'
				})
				return
			} else if (res.code === '17001') {
				console.log('账号不存在');
				return
			}
		})
	}
	const orderLogin = function() {
		uni.showToast({
			title: '暂时没更多登录方式',
			icon: 'exception'
		})
	}
</script>

<style scoped lang="less">
	@width: 100%;

	.box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: @width;

		.logo {
			margin-top: 150px;
			width: 100px;
			height: 100px;

			.logoImg {
				width: 100%;
				height: 100%;
			}
		}

		.login {
			margin-top: 20px;
			width: 80%;

			.inp {
				margin: 20px 0;
				padding: 5px 20px;
				width: 88%;
				height: 20px;
				border: 1px solid grey;
				border-radius: 20px;
			}

			.loginBtn {
				margin-top: 20px;
				border-radius: 20px;
				background-color: #d9b;
			}
		}

		.order {
			margin-top: 10px;

			.orderItem {
				width: 120px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				color: blueviolet;
			}
		}

		.botm {
			position: fixed;
			bottom: 40px;
			color: cornflowerblue;
		}
	}
</style>