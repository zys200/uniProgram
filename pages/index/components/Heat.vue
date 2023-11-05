<template>
	<div class="box">
		<div class="boxItem" v-for="item in heatData" :key="item.id">
			<div class="top">
				<div class="title">{{item.title}}</div>
				<text class="ttt">{{item.alt}}</text>
			</div>
			<div class="content" :data-types="item.type" @click="onChangeType">
				<image class="imgss" :src="i" v-for="i in item.pictures" :key="i.index"></image>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, defineExpose } from 'vue';
	import PubSub from 'pubsub-js'
	import { getHeat } from '../../../request/resInstance'

	let heatData = ref([])
	let toType = ref(-1)

	const getHeatData = function() {
		getHeat().then(res => {
			heatData.value = res.result
		})
	}
	const resetHeat = function() {
		heatData.value = []
	}
	onMounted(() => {
		getHeatData()
	})
	defineExpose({
		resetHeat,
		getHeatData
	})
	const onChangeType = function(e) {
		toType.value = e.currentTarget.dataset.types
		uni.navigateTo({
			url: '/pages/hests/hests?id=' + toType.value
		})
	}
</script>

<style scoped>
	.box {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
	}

	.boxItem {
		flex: 50%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	}

	.top {
		display: flex;
		height: 40px;
	}

	.title {
		text-align: center;
		width: 100px;
		font-size: 22px;
		line-height: 40px;
	}

	.top .ttt {
		line-height: 45px;
	}

	.content {
		display: flex;
		flex-direction: row;
	}

	.content .imgss {
		margin: 0 2px;
		width: 100px;
		height: 100px;
	}
</style>