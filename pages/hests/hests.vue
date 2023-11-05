<template>
	<div class="box">
		<div class="topImg">
			<image class="ti" :src="hestsDataList"></image>
		</div>
		<div class="usc">
			<uni-segmented-control activeColor="#d9b" :current="current" :values="values" @clickItem="onClickItem"
				styleType="text" class="uscItem" />
			<view class="content" v-show="current">
				<view class="vc">
					<div class="contentItem" v-for="item in getGoods.items" :key="item.id">
						<image :src="item.picture" class="imgss" />
						<text class="tt">{{item.desc}}</text>
						<text class="tt">￥：{{item.price}}</text>
					</div>
				</view>
			</view>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, watch } from 'vue'
	import { getPreference } from '../../request/resInstance'

	let types = ref(0)
	let hestsDataList = ref('')
	let hestsDataLists = ref([])
	let values = ref([])
	let current = ref(0)
	let getGoods = ref([])
	let urls = [
		{ type: '1', title: '特惠推荐', url: '/hot/preference' },
		{ type: '2', title: '爆款推荐', url: '/hot/inVogue' },
		{ type: '3', title: '一站全买', url: '/hot/oneStop' },
		{ type: '4', title: '新鲜好物', url: '/hot/new' },
	]

	const onClickItem = function(e) {
		if (current.value !== e.currentIndex) {
			current.value = e.currentIndex
		}
	}
	onMounted(() => {
		let instance = getCurrentPages()
		types.value = instance[1].options.id
		urls.map(v => {
			if (v.type == types.value) {
				getPreference(v.url).then(res => {
					hestsDataList.value = res.result.bannerPicture
					hestsDataLists.value = res.result.subTypes.map(v => {
						return {
							id: v.id,
							title: v.title,
							goodsItems: v.goodsItems
						}
					})
					hestsDataLists.value.forEach(v => {
						values.value.push(v.title)
					})
				})
				return
			}
		})
	})
	watch(current, (newVal) => {
		return getGoods.value = hestsDataLists.value[newVal].goodsItems
	}, { deep: true })
</script>

<style scoped>
	.box {
		width: 100%;
	}

	.topImg {
		width: 100%;
		height: 160px;
	}

	.ti {
		width: 100%;
		height: 160px;
	}

	.usc {
		width: 100%;
	}

	.uscItem {
		width: 30%;
		height: 200px;
	}

	.content .vc {
		display: flex;
		flex-wrap: wrap;
	}

	.contentItem {
		flex: 50%;
		display: flex;
		flex-direction: column;
	}

	.contentItem .imgss {
		margin: 0 auto;
		padding: 2px 0;
		width: 100px;
		height: 100px;
	}

	.contentItem .tt {
		padding-left: 2px;
		display: inline-block;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>