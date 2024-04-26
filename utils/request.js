// 系统信息
export const SYSTEM_INFO = uni.getSystemInfoSync()

export default function request(option = {}) {
	let {
		url,
		data = {},
		method = "GET",
		header = {}
	} = option

	// api 服务代理路径
	const API_PROXY = SYSTEM_INFO.uniPlatform === 'web' ? '/h5api' : ''
	if (url.slice(0, 4) !== 'http') {
		url = API_PROXY + url
	}

	return new Promise((resolve, reject) => {
		uni.request({
			url,
			data,
			method,
			header,
			success: (res) => {
				if (res.data.errCode === 0) {
					resolve(res.data)
				} else if (res.data.errCode === 400) {
					uni.showModal({
						title: "错误提示",
						content: res.data.errMsg,
						showCancel: false
					})
					reject(res.data)
				} else {
					uni.showToast({
						title: res.data.errMsg,
						icon: "none"
					})
					reject(res.data)
				}
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}