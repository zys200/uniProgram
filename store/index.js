import { ref } from 'vue'
import { defineStore } from 'pinia'
import { changeCars } from '../request/resInstance'

export const myStore = defineStore('main', () => {
	let token = ref('')
	let reID = ref('')
	let toCarGoods = ref([])
	let addressDataList = ref([])

	const getToken = function() {
		uni.getStorage({
			key: 'userInfos',
			success(res) {
				token.value = res?.data
			}
		})
	}
	const addGoods = function(val) {
		const index = toCarGoods.value.findIndex(v => v.id === val.id);
		if (index !== -1) {
			toCarGoods.value[index] = val;
		} else {
			toCarGoods.value.push(val);
		}
	}

	return {
		token,
		reID,
		toCarGoods,
		addressDataList,
		getToken,
		addGoods
	}
})