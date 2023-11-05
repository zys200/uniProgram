<template>
	<swiper class="sp" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item v-for="item in props?.swiperDatas" :key="item.id">
			<view>
				<image :src="item.imgUrl" class="imgs"></image>
			</view>
		</swiper-item>
	</swiper>
</template>

<script setup>
	import { defineProps } from 'vue'
	let props = defineProps(['swiperDatas'])
</script>

<style scoped>
	.sp {
		width: 100%;
		height: 170px;
		background-color: darkgrey;
	}

	.imgs {
		width: 100%;
	}
</style>