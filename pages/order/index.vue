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
			<u-action-sheet :actions="list" :title="title" :show="show" safeAreaInsetBottom
				:closeOnClickOverlay="false"></u-action-sheet>
			<u-button @click="isShow">配送时间</u-button>
			<!-- <u-button @click="isShow">配送地址</u-button> -->
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
	let list = ref([{
		name: '选项一',
		subname: "选项一描述",
		color: '#ffaa7f',
		fontSize: '20'
	}, {
		name: '选项2',
		subname: "选项一描述",
		color: '#ffaa7f',
		fontSize: '20'
	}, ])
	let title = 'one'
	let show = ref(false)

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
	})
	const isShow = function() {
		show.value = true
	}
	const cloes = function() {
		show.value = false
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
			background-color: aqua;
		}
	}
</style>