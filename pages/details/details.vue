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
				<text class="t2">res</text>
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
				<div v-if="name === '1' "> <text>名称</text>:<text>haha</text></div>
				<div v-if="name==='song'"> ddddddddddddd </div>
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
	let count = ref(0)
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

	const getAllGoodsDatas = function() {
		let instance = getCurrentPages()
		goodsId.value = instance[1].options.id
		console.log(goodsId.value);
		getDoodsDetails(goodsId.value).then(res => {
			allGoodsDatas.value = res.result
		})
	}
	const open = function(val) {
		name.value = val
		popup.value.open()
	}
	//底部栏
	const onClick = function(e) {
		console.log(e);
	}
	//加入购物车或购买
	const buttonClick = function(e) {
		toCarType.value = e.content.text
		// options[2].value.info++ 
		let header = ref({
			'Authorization': `${store.token}`
		})
		let datas = JSON.stringify({
			kuId: goodsId.value,
			count: 1
		})
		if (toCarType.value === '加入购物车') {
			toCars(header.value, datas).then(res => {
				console.log(res);
			})
		} else {
			console.log('购买');
		}
	}
	onMounted(() => {
		getAllGoodsDatas()
		store.getToken()
	})
</script>

<style scoped lang="less">
	@width: 100%;
	@bgc: #d9b;

	// @dhtxt() {
	// 	white-space: nowrap;
	// 	text-overflow: ellipsis;
	// 	overflow: hidden;
	// }

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
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
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
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
							// @dhtxt()
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