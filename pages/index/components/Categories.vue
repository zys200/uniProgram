<template>
	<div class="box">
		<div class="boxItem" v-for="item in categotyData" :key="item.id">
			<image :src="item.icon" class="imgs"></image>
			<text class="tt">{{item.name}}</text>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted, defineExpose } from 'vue'
	import { getCategory } from "../../../request/resInstance"

	let categotyData = ref([])

	const getCategoryData = function() {
		getCategory().then(res => {
			categotyData.value = res.result
		})
	}
	const resetCategory = function() {
		categotyData.value = []
	}
	onMounted(() => {
		getCategoryData()
	})
	defineExpose({
		resetCategory,
		getCategoryData
	})
</script>

<style scoped>
	.box {
		display: flex;
		flex-wrap: wrap;
		padding-top: 10px;
		width: 100%;
		height: 150px;
		background-color: #f7f7f7;
	}

	.boxItem {
		flex: 20%;
		display: flex;
		flex-direction: column;
		margin: 3px 0;
		height: 66px;
	}

	.box .imgs {
		margin: 2px auto;
		width: 42px;
		height: 42px;
	}

	.box .tt {
		text-align: center;
	}
</style>