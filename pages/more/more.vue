<template>
	<view class="box">
		<div class="search">
			<input class="inp" v-model="txtValue" type="text" placeholder="请输入内容..." placeholder-style="color :grey" />
		</div>
		<div class="content">
			<scroll-view scroll-y class="svLeft" :scroll-into-view="ids" scroll-with-animation>
				<view>
					<div class="svLeftItem" v-for="item in categoryDataLeft" :key="item.id" :id="'a' + item.id"
						@click="scrollInto">
						{{item.name}}
					</div>
				</view>
			</scroll-view>
			<div class="right">
				<div class="swipers">
					<Testswiper :swiperDatas="bannerDatas" />
				</div>
				<scroll-view scroll-y class="svItem" style="height: calc(100ch - 409px);">
					<view>
						<div class="rightItem" v-for="(item,index) in newCategory" :key="item.index">
							<div>
								<image class="imgss" :src="item.picture" />
							</div>
							<div class="ttitle">
								<text>{{item.name}}</text>
							</div>
						</div>
						<div class="errs" v-if="errs">
							<text>暂时没有数据哦...</text>
						</div>
					</view>
				</scroll-view>
			</div>
		</div>
	</view>
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { getBanner, getCategory, getCategoryMore } from "../../request/resInstance"
	import Testswiper from '../../components/Testswiper/Testswiper.vue'

	let txtValue = ref('')
	let categoryDataLeft = ref([])
	let ids = ref('')
	let thisIds = ref()
	let bannerDatas = ref([])
	let categotyDataRight = ref([])
	let newCategory = ref([])
	let errs = ref(false)

	const scrollInto = function(e) {
		ids.value = e.currentTarget.id
		thisIds.value = e.currentTarget.id.slice(1) >>> 0
	}
	onMounted(() => {
		getBanner().then(res => {
			bannerDatas.value = res.result
		})
		getCategory().then(res => {
			categoryDataLeft.value = res.result
		})
		getCategoryMore().then(res => {
			categotyDataRight.value = res.result
			res.result.forEach(v => {
				if (v.id >>> 0 === thisIds.value) {
					newCategory.value = v.children
					return
				}
			})
		})
	})
	watch(thisIds, (newVal) => {
		if (newVal) {
			categotyDataRight.value.map(v => {
				if (v.id >>> 0 === newVal) {
					newCategory.value = v.children
					return
				}
			})
			return
		} else {
			newCategory.value = []
			errs.value = true
		}
	})
</script>

<style scoped>
	.box {
		box-sizing: border-box;
		width: 100%;
		height: 100vh;
	}

	.search {
		position: relative;
		width: 100%;
		height: 50px;
		overflow: hidden;
	}

	.inp {
		margin: 5px auto;
		padding-left: 60px;
		width: 80%;
		height: 76%;
		border: 1px solid grey;
		border-radius: 30px;
	}

	.inp::before {
		position: absolute;
		top: 10px;
		left: 26px;
		content: "\e651";
		font-family: iconfont;
		font-size: 30px;
	}

	.content {
		display: flex;
	}

	.svLeft {
		width: 100px;
		height: 500px;
		background-color: azure;
	}

	.svLeftItem {
		height: 60px;
		text-align: center;
		font-size: 22px;
		line-height: 60px;
	}

	.isActive {
		font-size: 28px;
	}

	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.swipers {
		width: 100%;
	}

	.svItem {}

	.rightItem {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 110px;
		background-color: honeydew;
	}

	.ttitle {
		margin-top: 2px;
		margin-left: 20px;
		font-size: 22px;
		line-height: 110px;
	}

	.imgss {
		width: 100px;
		height: 100px;
		border-radius: 30px;
	}
</style>