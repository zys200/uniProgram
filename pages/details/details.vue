<template>
	<div class="box">
		<div class="imgs">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="height: 300px;">
				<swiper-item v-for="(item , index) in allGoodsDatas.mainPictures" :key="item.index">
					<view class="swiperItem">
						<image class="mainImg" :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</div>
		<div class="price">
			<text class="txts">￥：{{allGoodsDatas.price}}</text>
		</div>
		<div class="dscs">
			<text>{{allGoodsDatas.name}}</text>
			<text class="ttt">{{allGoodsDatas.desc}}</text>
		</div>
		<!-- choose模块 -->
		<div class="choose">
			<uni-section title="规格" type="line"></uni-section>
			<view class="fuwu" @click="open('1')">
				<text class="t1">选择</text>
				<text class="t2">{{chooses}}</text>
			</view>
			<div class="fuwu" @click="open('song')">
				<text class="t1">送至</text>
				<text class="t2">res</text>
			</div>
			<div class="fuwu" @click="open('sever')">
				<text class="t1">服务</text>
				<text class="t2">res</text>
			</div>
			<uni-popup ref="popup" type="bottom" :mask-click="false" background-color="#fff" is-mask-click>
				<div v-if="name === '1' ">
					<div class="one">
						<div class="top">
							<image :src="goods.picture" class="imgss"></image>
							<div class="right">
								<text>￥：{{goods.price * count }}</text>
								<text>库存：{{goods.inventory}}</text>
								<text>{{dynamicGoods[0].name1}} {{dynamicGoods[1].name2}}</text>
							</div>
						</div>
						<!-- tow hours -->
						<div class="chooses">
							<div v-for="(item,index) in goods.specs" :key="item.index">
								<h5>{{item.name}}</h5>
								<button v-for="(i,d) in goodsCategoty[index].valuse" :key="i.d" :data-index="index"
									:data-index2="d" :id="goodsCategoty[index].id" @click="realyGoods">
									<text>{{i.name}}</text>
								</button>
							</div>
						</div>
						<div class="num">
							<button class="btn" @click="toComputed('j')">-</button>
							<text>{{count}}</text>
							<button class="btn" @click="toComputed('ad')">+</button>
						</div>
						<div class="buttoms">
							<div class="kongbai"></div>
							<uni-goods-nav class="btnItem" :fill="true" :button-group="buttonGroup"
								@buttonClick="buttonClick" />
						</div>
					</div>
				</div>
				<div v-if="name==='song'">ddddddddddddd</div>
				<div v-if="name==='sever'">
					<view class="title">服务说明</view>
					<!-- 内容 -->
					<view class="content">
						<view class="item">
							<view class="dt">无忧退货</view>
							<view class="dd">
								自收到商品之日起30天内，可在线申请无忧退货服务（食品等特殊商品除外）
							</view>
						</view>
					</view>
				</div>
			</uni-popup>
		</div>
		<div class=" deatils">
			<uni-section title="详情" type="line"></uni-section>
			<div>
				<div class="detailsImg" v-for="item in allGoodsDatas.details?.pictures.slice(0,3)" :key="item.index">
					<image :src="item"></image>
				</div>
			</div>
			<div class="detailsTxt" v-for="item in allGoodsDatas.details?.properties" :key="item.index">
				<div>
					<text>{{item.name}}</text>:<text>{{item.value}}</text>
				</div>
			</div>
		</div>
		<uni-section title="更多" type="line"></uni-section>
		<div class="more">
			<div class="moreItem" v-for="item in allGoodsDatas.similarProducts" :key="item.id">
				<div class="moreImg">
					<image class="imagee" :src="item.picture"></image>
				</div>
				<div class="moreTxt">
					<text class="textt">{{item.name}}</text>
					<div class="divv">￥：{{item.price}}</div>
				</div>
			</div>
		</div>
		<div class="toCar">
			<view class="goods-carts">
				<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
					@buttonClick="buttonClick" />
			</view>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { getDoodsDetails, toCars } from '../../request/resInstance.ts'
	import { myStore } from '../../store/index.js'

	let goodsId = ref('')
	let allGoodsDatas = ref({})
	let popup = ref(null)
	let name = ref('')
	let options = ref([{
		icon: 'chat',
		text: '客服'
	}, {
		icon: 'shop',
		text: '店铺',
		info: 2,
		infoBackgroundColor: '#007aff',
		infoColor: "#f5f5f5"
	}, {
		icon: 'cart',
		text: '购物车',
		info: 2
	}])
	let buttonGroup = ref([{
			text: '加入购物车',
			backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
			color: '#fff'
		},
		{
			text: '立即购买',
			backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
			color: '#fff'
		}
	])
	let store = myStore()
	let toCarType = ref('')
	let tokens = ref('')
	let chooses = ref('')
	let names = ref([])
	let goods = ref({})
	let goodsSpecs = ref([])
	let goodsSkus = ref([])
	let goodsCategoty = ref([])
	let dynamicGoods = ref([
		{ name1: '', pic: '' },
		{ name2: '' }
	])
	let count = ref(0)
	let realyId = ref('')

	onMounted(() => {
		getAllGoodsDatas()
		store.getToken()
	})
	const getAllGoodsDatas = function() {
		let instance = getCurrentPages()
		goodsId.value = instance[1].options.id
		getDoodsDetails(goodsId.value).then(res => {
			allGoodsDatas.value = res.result
		})
	}
	const findGoods = function() {
		// goodsSkus.value[0].specs.forEach(v => {
		// 	names.value.push(v.name)
		// })
		goodsSpecs.value.forEach(v => {
			goodsCategoty.value.push({
				id: v.id,
				name: v.name,
				valuse: v.values
			})
		})
		// console.log(goodsCategoty.value, 'cate');
	}
	const getGood = function() {
		getDoodsDetails(goodsId.value).then(res => {
			goodsSkus.value = res.result.skus
			// console.log(goodsSkus.value, 'skus', 'goods', '首次渲染的id');
			goods.value = res.result.skus[0]
			goodsSpecs.value = res.result.specs
			// console.log(goodsSpecs.value, 'specs', '选中，图片');
			findGoods()
		})
	}
	const realyGoods = function(e) {
		let id = e.target.id
		let ix = e.currentTarget.dataset.index >>> 0
		let i = e.currentTarget.dataset.index2 >>> 0
		if (ix == 0) {
			dynamicGoods.value[0].name1 = goodsSpecs.value[0].values[i].name
			dynamicGoods.value[0].pic = goodsSpecs.value[0].values[i].picture
		} else if (ix == 1) {
			dynamicGoods.value[1].name2 = goodsSpecs.value[1].values[i].name
		}
	}
	const toComputed = function(c) {
		if (c === 'ad') {
			count.value += 1
			return
		} else if (c === 'j' && count.value !== 0) {
			count.value -= 1
			return
		} else {
			count.value = 0
			return
		}
	}
	const realyID = function() {
		if (dynamicGoods.value[0].name1 !== '') {
			goodsSkus.value.forEach(v => {
				// console.log(v.specs[0].valueName);
				// console.log(dynamicGoods.value[0].name1);
				// console.log(dynamicGoods.value);
				if (v.specs[0].valueName === dynamicGoods.value[0].name1 && count.value !== 0) {
					realyId.value = v.id
					return
				} else {
					uni.showToast({
						icon: 'error',
						title: '失败了！！'
					})
					return
				}
			})
			return
		} else {
			uni.showToast({
				icon: 'error',
				title: '请选择商品!'
			})
		}
	}
	const open = function(val) {
		name.value = val
		getGood()
		popup.value.open()
	}
	//底部栏
	const onClick = function(e) {
		console.log(e);
	}
	//加入购物车或购买
	const buttonClick = function(e) {
		realyID()
		if (realyId.value === '') {
			// uni.showToast({
			// 	icon: 'error',
			// 	title: '请选择商品!'
			// })
			console.log(1);
			return
		}
		toCarType.value = e.content.text
		// options[2].value.info++ 
		let header = ref({
			'Authorization': store.token
		})
		let datas = JSON.stringify({
			skuId: realyId.value,
			count: count.value
		})
		if (toCarType.value === '加入购物车') {
			toCars(header.value, datas).then(res => {
				// console.log(res.result)
				// res.reault.count = count.value
				// console.log(res.result.id);
				store.addGoods(res.result)
				uni.showToast({
					icon: 'success',
					title: '好的,已添加到购物车'
				})
			})
		} else {
			console.log('购买');
		}
		realyId.value = ''
		count.value = 0
		// while (popup.value.close()) {
		// 	dynamicGoods.value = [{ name1: '', pic: '' }, { name2: '' }]
		// }
	}
</script>

<style scoped lang="less">
	@width: 100%;
	@bgc: #d9b;

	.textd() {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.box {
		width: @width;

		& .imgs {
			width: @width;
			height: @width;

			.swiperItem {
				width: 100%;

				.mainImg {
					width: 100%;
					height: 300px;
				}
			}

		}

		.price {
			padding: 0 30px;
			width: @width;
			height: 70px;
			background-color: @bgc ;
			font-size: 22px;
			line-height: 70px;
		}

		.dscs {
			display: flex;
			flex-direction: column;

			&>text:first-child {
				font-size: 18px;
				color: black;
			}

			& .ttt {
				display: -webkit-box;
				-webkit-line-clamp: 2;
				text-overflow: ellipsis;
				overflow: hidden;
				font-style: 12px;
				color: grey;
			}
		}

		.choose {
			padding: 5px 2px;

			.one {
				display: flex;
				flex-direction: column;

				.top {
					display: flex;
					align-items: center;
					height: 100px;

					.imgss {
						width: 80px;
						height: 80px;
					}

					.right {
						display: flex;
						flex-direction: column;
						margin-left: 30px;
					}
				}

				.chooses {
					display: flex;
					flex-direction: column;
					padding: 5px 10px;

					button {
						display: inline-block;
						height: 30px;
						text-align: center;
						line-height: 30px;
						font-size: 12px;
					}
				}

				.num {
					display: flex;
					flex-direction: row;
					align-items: center;
					transform: translateX(160%);
					width: 150px;

					.btn {
						margin: 0 10px;
						width: 36px;
						height: 36px;
						text-align: center;
						line-height: 36px;
						border-radius: 10px;
					}
				}

				.buttoms {
					position: relative;

					.kongbai {
						position: absolute;
						top: 0;
						left: 0;
						z-index: 10000;
						width: 110px;
						height: 50px;
						background-color: #fff;
					}
				}
			}

			.fuwu {
				display: flex;
				flex-direction: row;
				width: @width;
				height: 50px;
				border: 1px solid gainsboro;
				line-height: 50px;

				.t1 {
					width: 100px;
					text-align: center;
				}

				.t2 {
					flex: 1;
					position: relative;

					&.t2::after {
						position: absolute;
						top: -2px;
						right: 10px;
						content: '>';
						font-family: iconfont;
						font-size: 26px;
						color: gray;
					}
				}
			}
		}

		.deatils {
			width: @width;

			.detailsImg {
				display: flex;
				justify-content: center;
				width: 90%;
				height: 160px;
				overflow: hidden;
			}

			.detailsTxt {
				width: 70%;
				padding: 5px 40px;
				font-size: 14px;
				.textd()
			}
		}

		.more {
			display: flex;
			flex-wrap: wrap;
			width: @width;

			.moreItem {
				flex: 50%;
				height: 160px;
				text-align: center;

				.moreImg {
					margin: 0 auto;
					width: 100px;
					height: 100px;

					.imagee {
						width: 100px;
						height: 100px;
					}

					.moreTxt {
						padding: 1px 2px;
						font-size: 12px;

						.textt {
							.textd()
						}

						.divv {
							text-align: center;
						}
					}
				}
			}

		}

		.toCar {
			position: fixed;
			bottom: 22px;
			margin: 0 auto;
			width: @width;
		}
	}
</style>