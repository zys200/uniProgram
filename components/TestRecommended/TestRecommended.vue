<template>
	<div class="box">
		<div class="top">
			<text class="tt">为您推荐</text>
		</div>
		<div class="content">
			<div class="contentItem" v-for="item in props.recommedData" :key="item.index" :id="item.id"
				@click="toDetials">
				<image class="imggg" :src="item.picture" />
				<text class="tt1">{{item.desc}}</text>
				<text class="tt2">￥：{{item.price}}</text>
			</div>
		</div>
		<div class="showtips" v-if="props.flesh">
			<text>正在刷新...</text>
		</div>
	</div>
</template>

<script setup>
	import { defineProps } from 'vue'

	let props = defineProps(['recommedData', 'flesh'])

	const toDetials = function(e) {
		uni.navigateTo({
			url: '/pages/details/details?id=' + e.currentTarget.id
		})
	}
</script>

<style scoped>
	.box {
		width: 100%;
	}

	.top {
		width: 100%;
		height: 50px;
		font-size: 30px;
		text-align: center;
		line-height: 50px;
		background-color: beige;
	}

	.top .tt::after {
		margin-left: 5px;
		content: '\e62a';
		font-family: iconfont;
		color: #d9b;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
	}

	.contentItem {
		flex: 50%;
		display: flex;
		flex-direction: column;
		flex: 49%;
	}

	.contentItem .imggg {
		margin: 2px auto;
		width: 200px;
		height: 200px;
	}

	.contentItem .tt1 {
		display: inline-block;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.contentItem .tt2 {
		display: inline-block;
	}

	.showtips {
		width: 100%;
		height: 50px;
		background-color: bisque;
		text-align: center;
		line-height: 60px;
	}
</style>