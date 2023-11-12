<template>
	<view>
		<button @click="hhh">click</button>
	</view>
</template>

<script setup>
	const hhh = function() {
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
</script>

<style>

</style>