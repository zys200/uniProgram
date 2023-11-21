<template>
	<div class="box">
		<div class="content" v-for="item in addressData" :key="item.id">
			<div class="left">
				<div class="top">
					<div class="name">{{item.receiver}}</div>
					<div class="phoneNum">{{item.contact}}</div>
				</div>
				<div class="address">
					{{item.fullLocation + item.address}}
				</div>
			</div>
			<div class="right" @click="toChangeAddress" :id="item.id">
				<text>修改</text>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import { myStore } from '../../store/index'
	import { getAddress } from '../../request/resInstance'

	let store = myStore()
	let addressData = ref()

	onMounted(() => {
		let header = {
			Authorization: `${store.token}`
		}
		console.log(header);
		getAddress(header).then(res => {
			// console.log(res.result.slice(0, 2), 'res')
			addressData.value = res.result?.slice(0, 2)
			store.addressDataList = (res.result?.slice(0, 2))
			// console.log(store.addressDataList, 'store')
			console.log(res);
		})
	})
	const toChangeAddress = function(e) {
		let ids = e.currentTarget.id
		uni.navigateTo({
			url: "/pages/address/component/changeAddress?id=" + ids
		})
	}
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.content {
			display: flex;
			flex-direction: row;
			height: 70px;
			background-color: antiquewhite;

			.left {
				flex: 6;
				display: flex;
				flex-direction: column;

				.top {
					display: flex;
					flex-direction: row;
					line-height: 35px;

					.name {
						padding-left: 10px;
						width: 30%;
						font-size: 20px;
					}
				}

				.address {
					padding-left: 10px;
					line-height: 35px;
				}
			}

			.right {
				flex: 1;
				text-align: center;
				line-height: 70px;
				border-left: 1px solid grey;
			}
		}
	}
</style>