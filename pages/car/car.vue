<template>
	<div class="box">
		<div class="content">
			<u-checkbox-group v-model="checkboxValue1" @change="checkboxChange">
				<div class="contentItem" v-for="(item, index) in getToCar" :key="item.id">
					<u-checkbox v-model="item.selected" :name="item.id" class="ucb" />
					<div class="imgs">
						<image class="imgss" :src="item.picture" />
					</div>
					<div class="dsc">
						<h5>{{item.name}}</h5>
						<text>{{item.specs[0].valueName}}</text>
						<text>￥：{{item.nowPrice * item.count}}</text>
					</div>
					<div class="num">
						<button class="btn" @click="toChangeCount(item.id,'-')">-</button>
						<text>{{item.count}}</text>
						<button class="btn" @click="toChangeCount(item.id,'+')">+</button>
					</div>
				</div>
			</u-checkbox-group>
		</div>
		<div class="res">
			<div class="kongbai">
				<text>总价：{{totalPrices}}</text>
			</div>
			<uni-goods-nav :fill="true" :button-group="customButtonGroup1" @buttonClick="buttonClick" />
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { myStore } from '../../store/index.js'
	import { changeCars } from '../../request/resInstance'

	let store = myStore()
	let getToCar = ref([])
	let checkeds = ref([])
	let checkboxValue1 = ref()
	let totalPrices = ref(0)
	let customButtonGroup1 = [{
		text: '立即购买',
		backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
		color: '#fff'
	}]

	onMounted(() => {
		getToCar.value = store.toCarGoods
		// console.log(store.toCarGoods);
	})
	//选择框
	const checkboxChange = function(e) {
		console.log(e, '现在选中');
		checkeds.value = e
		getTotalPrices()
	}
	//总价
	const getTotalPrices = function() {
		let sum = 0
		let res = getToCar.value.filter(v => {
			return checkeds.value.includes(v.id)
		})
		// console.log(res);
		res.forEach(v => {
			// console.log(v.price >>> 0 * v.count);
			sum += v.price >>> 0 * v.count
			// console.log(sum);
		})
		totalPrices.value = sum
	}
	const changeGoods = function() {
		//修改购物车数量等
	}
	const toChangeCount = function(ids, c) {
		// console.log(c);
		// let res = getToCar.value.find(v => v.id === ids)
		// store.addGoods(res)
	}
	//结算
	const buttonClick = function() {
		if (checkeds.value.length) {
			uni.navigateTo({
				url: '/pages/order/index',
				success(qu) {
					qu.eventChannel.emit('goodes', {
						data: Object.entries(checkeds.value).flat()
					})
				}
			})
		} else {
			uni.showToast({
				icon: 'fail',
				title: '请选择商品'
			})
		}
	}
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.content {
			width: 100%;

			.contentItem {
				position: relative;
				margin: 2px;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 100%;
				height: 100px;
				border-radius: 20px;
				background-color: #efe0e9;

				.ucb {
					display: block;
					width: 70px;
					text-align: center;
				}

				.imgs {
					width: 100px;
					height: 100px;

					.imgss {
						width: 100%;
						height: 100%;
					}
				}

				.dsc {
					margin-left: 5px;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
					height: 100%;

					.tt {
						flex: 1;
						line-height: 33px;
					}
				}

				.num {
					position: absolute;
					right: 10px;
					bottom: 6px;
					display: flex;
					flex-direction: row;
					align-items: center;

					.btn {
						margin: 0 10px;
						width: 36px;
						height: 36px;
						text-align: center;
						line-height: 36px;
						border-radius: 10px;
					}
				}

			}
		}

		.res {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 50px;

			.kongbai {
				position: absolute;
				bottom: 0;
				z-index: 1000;
				padding: 2px;
				width: 100px;
				height: 50px;
				background-color: #ffffff;
				line-height: 50px;
			}
		}
	}
</style>