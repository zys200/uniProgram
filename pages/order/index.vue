<template>
	<div class="box">
		<div class="content" v-for="item in nowGoodes" :key="item.id">
			<div class="imgd">
				<image class="imgs" :src="item.picture" />
			</div>
			<div class="right">
				<text>{{item.name}}</text>
				<text>2</text>
				<text>3</text>
			</div>
		</div>
		<view class="msg">
			<u-form label-position="left" :model="modelFrom" :rules="rules" ref="form1">
				<u-form-item label="地址" prop="userInfo.address" @click="pishow = true">
					<u-input v-model="modelFrom.userInfo.address" placeholder="请选择地址" disabled border="none"></u-input>
				</u-form-item>
			</u-form>
			<u-picker :show="pishow" :columns="nowAddress" @confirm="confirm"></u-picker>
			<text>总价：{{}}</text>
		</view>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { myStore } from '../../store/index'

	const pages = getCurrentPages()
	const page = pages[pages.length - 1]
	const eventChannel = page.getOpenerEventChannel();
	let store = myStore()
	let nowGoodes = ref([])
	let pishow = ref(false)
	let modelFrom = ref({
		userInfo: {
			address: '',
		},
	})
	let nowAddress = ref([
		[]
	])
	let rules = {
		'userInfo.address': {
			type: 'string',
			required: true,
			message: '请选择地址',
			trigger: ['blur', 'change']
		}
	}

	onMounted(() => {
		eventChannel.on('goodes', (data) => {
			let datas = []
			data.data.forEach((v, index) => {
				if (index % 2 !== 0) {
					datas.push(v)
				}
			})
			store.toCarGoods.forEach(v => {
				if (datas.some(e => e === v.id)) {
					nowGoodes.value.push(v)
				}
			})
		})
		store.addressDataList?.forEach(v => {
			nowAddress.value[0].push(v.fullLocation)
		})
		// console.log(nowAddress.value);
	})
	const confirm = function(e) {
		let { value } = e
		modelFrom.value.userInfo.address = value[0]
		pishow.value = false
	}
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.content {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 100%;

			.imgd {
				flex: 1;
				border-radius: 3px;

				.imgs {
					width: 100px;
					height: 100px;
				}
			}

			.right {
				flex: 4;
				display: flex;
				flex-direction: column;
			}
		}

		.msg {
			width: 100%;
		}
	}
</style>