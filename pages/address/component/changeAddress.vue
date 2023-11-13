<template>
	<div class="box">
		<div class="boxItem">
			<u-form ref="formaddress" :model="modelFrom" :rules="rules">
				<u-form-item class="ufi" label="姓名" prop="addressInfo.nikename" borderBottom ref="item1">
					<u--input v-model="modelFrom.addressInfo.nikename" border="none"></u--input>
				</u-form-item>
				<u-form-item class="ufi" label="电话" prop="addressInfo.phoneNum" borderBottom ref="item2">
					<u--input v-model="modelFrom.addressInfo.phoneNum" border="none"></u--input>
				</u-form-item>
				<u-form-item class="ufi" label="省份" prop="addressInfo.city" borderBottom ref="item3"
					@click="pishow = true">
					<u--input v-model="modelFrom.addressInfo.city" border="none"></u--input>
				</u-form-item>
				<u-form-item class="ufi" label="详细" prop="addressInfo.dsc" borderBottom ref="item4">
					<u--input v-model="modelFrom.addressInfo.details" border="none"></u--input>
				</u-form-item>
			</u-form>
			<u-button @click="submit" class="btn">提交</u-button>
		</div>
		<u-picker :show="pishow" ref="uPicker" :columns="columns" @confirm="confirm" @change="changeHandler"></u-picker>
	</div>
</template>

<script setup>
	import { ref, reactive, onMounted } from 'vue';
	import { myStore } from '../../../store/index'

	let currentP = getCurrentPages()
	let store = myStore()
	let formaddress = ref(null)
	let modelFrom = ref({
		addressInfo: {
			nikename: '',
			phoneNum: '',
			city: '',
			details: ''
		}
	})
	let rules = {
		'addressInfo.nikename': {
			type: 'string',
			required: true,
			trigger: ['blur', 'change']
		},
		'addressInfo.phoneNum': {
			type: 'number',
			required: true,
			len: 11,
			message: '请填写正确的手机号',
			trigger: ['blur', 'change']
		},
		'addressInfo.city': {
			type: 'string',
			required: true,
			trigger: ['blur', 'change']
		},
		'addressInfo.details': {
			type: 'string',
			required: true,
			trigger: ['blur', 'change']
		},
	}
	let pishow = ref(false)
	let columns = reactive([
		['中国'],
		['深圳', '厦门', '上海', '拉萨']
	]);

	const getNowAddress = function() {
		let id = currentP[2].options.id
		let res = store.addressDataList.find(v => v.id === id)
		console.log(res.receiver);
		modelFrom.value.addressInfo.nikename = res.receiver
	}
	const changeHandler = (e) => {
		const { value } = e;
		modelFrom.value.addressInfo.city = value.toString()
	};
	const confirm = function() {
		pishow.value = false;
	}
	const submit = function() {
		formaddress.value.validate().then((res, rej) => {
			console.log('tongguo');
		}, rej => {
			console.log('weitonguo');
			uni.showToast({
				title: '校验未通过',
				icon: 'error'
			})
		})
	}
	onMounted(() => {
		getNowAddress()
	})
</script>

<style scoped lang="less">
	.box {
		width: 100%;

		.boxItem {
			.ufi {
				padding: 0 10px;
				height: 70px;
				line-height: 70px;
			}
		}

		.btn {
			margin: 30 atuo;
			width: 200px;
		}

	}
</style>