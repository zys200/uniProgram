export default function instance(url : string, method : any, header ?: object, data ?: object) {
	return new Promise((resolve, rej) => {
		uni.request({
			url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net' + url,
			timeout: 7000,
			method,
			data,
			header: {
				'source-client': 'miniapp',
				...header
			},
			success(res) {
				resolve(res.data)
			},
			fail(err) {
				rej(err)
			}
		})
	})
}