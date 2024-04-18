import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import fs from 'node:fs'
import uni from '@dcloudio/vite-plugin-uni'
import ENV_CONFIG from './config/env.js'

export default defineConfig({
	plugins: [
		uni(),
		AutoImport({
			imports: ['vue', 'uni-app'],
		})
	],
	define: {
		'process.env.config': ENV_CONFIG,
	},
})

// 动态修改 manifest.json
const manifestPath = `${__dirname}/manifest.json`
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })

function replaceManifest(path, value) {
	const arr = path.split('.')
	const len = arr.length
	const lastItem = arr[len - 1]

	let i = 0
	let ManifestArr = Manifest.split(/\n/)

	for (let index = 0; index < ManifestArr.length; index++) {
		const item = ManifestArr[index]

		if (new RegExp(`"${arr[i]}"`).test(item)) ++i
		if (i === len) {
			const hasComma = /,/.test(item);
			ManifestArr[index] = item.replace(
				new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
				`"${lastItem}": ${typeof value === 'string'? '"'+value+'"' : value}${hasComma ? ',' : ''}`
			);
			break
		}
	}

	Manifest = ManifestArr.join('\n')
}

// 这是我们主要注意动态修改的地方,按自己的需求配置
const appid = ENV_CONFIG[JSON.parse(process.env.UNI_CUSTOM_DEFINE).NODE_ENV_NAME].appid
replaceManifest('mp-weixin.appid', appid)
fs.writeFileSync(manifestPath, Manifest, { flag: 'w' })