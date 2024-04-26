import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import uni from '@dcloudio/vite-plugin-uni'
import ENV_CONFIG from './config/env.js'

export default defineConfig(() => {
	let BASE_API_URL = ''
	if (process.env.UNI_CUSTOM_DEFINE) {
		BASE_API_URL = ENV_CONFIG[JSON.parse(process.env.UNI_CUSTOM_DEFINE).ENV_TYPE].BASE_API_URL
	}

	return {
		plugins: [
			uni(),
			AutoImport({
				imports: ['vue', 'uni-app'],
			}),
		],
		define: {
			'process.env.ENV_CONFIG': ENV_CONFIG,
		},
		// 开发服务器选项 https://cn.vitejs.dev/config/#server-options
		server: {
			host: '0.0.0.0',
			port: 8888,
			open: true,
			proxy: {
				"/h5api": {
					target: BASE_API_URL, // 目标接口
					changeOrigin: true, // 是否换源
					rewrite: (path) => path.replace(/^\/h5api/, " "),
				}
			},
		},
	}
})