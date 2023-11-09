<template>
	<div class="box">
		<div class="content">
			<checkbox-group @change="checkboxChange">
				<div class="cd">
					<checkbox :value="cheakedAll" @change="cheakAll"><text>全部都要买</text></checkbox>
				</div>
				<label>
					<div class="contentItem" v-for="item in getToCar" :key="item.id" :id="item.id" :data-ids="item.id">
						<div class="checked">
							<checkbox :value="item.selected" :checked="item.selected" />
						</div>
						<div class="imgs">
							<image :src="item.picture"></image>
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
				</label>
			</checkbox-group>
		</div>
		<div class="res">
			<div class="kongbai">
				<text>总价：Null</text>
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
	let nowId = ref('')
	let checkeds = ref([])
	let cheakedAll = ref(true)
	let customButtonGroup1 = [{
		text: '立即购买',
		backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
		color: '#fff'
	}]

	onMounted(() => {
		getToCar.value = store.toCarGoods
		console.log(store.toCarGoods);
	})
	//选择框
	const cheakAll = function(e) {
		cheakedAll.value = !cheakedAll.value
	}
	const checkboxChange = function(e) {
		console.log(e);

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
		console.log(1);
	}
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.content {
			.cd {
				padding-left: 20px;
				height: 30px;
				line-height: 30px;
				background-color: #e8e9e9;
			}

			.contentItem {
				position: relative;
				margin: 2px;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 100px;
				border-radius: 20px;
				background-color: #efe0e9;

				.checked {
					padding-left: 16px;
					width: 30px;
				}

				.imgs {
					width: 100px;
					height: 100px;

					image {
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