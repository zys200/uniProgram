<template>
	<div class="top">
		<Top />
	</div>
	<scroll-view @scrolltolower="onScrolltolower" :style="{ height:  screenHeight - safeAreaInsets.top - 20 + 'px'}"
		class="sv" scroll-y refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isFlesh">
		<view>
			<div v-if="isFlesh"><text>正在刷新...</text></div>
			<div class="sp">
				<Testswiper :swiperDatas="swiperDatas" />
			</div>
			<div class="categoty">
				<Categories ref="childCategories" />
			</div>
			<div class="heat" ref="childHeats">
				<Heat />
			</div>
			<div class="recommed">
				<TestRecommended :recommedData="recommedData" :flesh="flesh" />
			</div>
		</view>
	</scroll-view>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import PubSub from 'pubsub-js'
	import { getBanner, getRecommed } from '../../request/resInstance'
	import Top from './components/Top.vue'
	import Categories from './components/Categories.vue'
	import Heat from './components/Heat.vue'

	let { screenHeight, safeAreaInsets } = uni.getSystemInfoSync()
	let swiperDatas = ref([])
	let childCategories = ref(null)
	let childHeats = ref(null)
	let recommedData = ref([])
	let isFlesh = ref(false)
	let pages = ref(1)
	let goon = ref(0)
	let flesh = ref(false)

	const onRefresherrefresh = async function() {
		isFlesh.value = true
		childCategories.value?.resetCategory()
		childHeats.value?.resetHeat()
		await Promise.all([getBanner(), getRecommed(pages.value), childCategories.value?.getCategoryData(),
			childHeats.value?.getHeatData()
		])
		isFlesh.value = false
	}
	const onScrolltolower = function() {
		flesh.value = true
		if (goon.value < pages.value) {
			flesh.value = false
			return
		}
		getRecommed(pages.value++).then(res => {
			recommedData.value.push(...res.result.items)
			flesh.value = false
		})
	}
	onMounted(() => {
		getBanner().then(res => {
			swiperDatas.value = res.result
		})
		getRecommed(pages.value).then(res => {
			recommedData.value = [...res.result.items]
			goon.value = Math.floor(res.result.pages / 10)
		})
	})
</script>

<style scoped>
	.top {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 100;
	}

	.sv {
		top: 154px;
	}

	.sp {
		margin-top: 154px;
	}
</style>