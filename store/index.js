import { defineStore } from 'pinia'
import { ref } from 'vue'

export const myStore = defineStore('main', () => {
	let token = ref('')

	const getToken = function() {
		uni.getStorage({
			key: 'userInfos',
			success(res) {
				token.value = res.data
			}
		})
	}

	return {
		token,
		getToken
	}
})