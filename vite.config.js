import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import uni from '@dcloudio/vite-plugin-uni'
import ENV_CONFIG from './config/env.js'

let BASE_API_URL = ''
if (process.env.UNI_CUSTOM_DEFINE) {
	BASE_API_URL = ENV_CONFIG[JSON.parse(process.env.UNI_CUSTOM_DEFINE).ENV_TYPE].BASE_API_URL
}

export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			imports: ['vue', 'uni-app'],
		}),
	],
	define: {
		'process.env.config': ENV_CONFIG,
	},
	// 开发服务器选项 https://cn.vitejs.dev/config/#server-options
	server: {
		host: '0.0.0.0',
		port: 8888, // 服务器端口
		open: true, // 在服务器启动时自动在浏览器中打开应用程序
		proxy: {
			'/proxy': {
				target: BASE_API_URL,
				changeOrigin: true, // 是否跨域
				rewrite: (path) => path.replace(/^\/proxy/, ''),
			},
		},
	},
})