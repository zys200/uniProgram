export default function instance(url : string, method : any, data ?: Object) {
	return new Promise((reslove, rej) => {
		uni.request({
			url: 'https://pcapi-xiaotuxian-front-devtest.itheima.net' + url,
			timeout: 7000,
			method,
			data: {
				data
			},
			header: {
				'source-client': 'miniapp',
				// 'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
			},
			success(res) {
				reslove(res.data)
			},
			fail(err) {
				rej(err)
			}
		})
	})
}