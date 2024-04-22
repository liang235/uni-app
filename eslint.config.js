import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import * as parserVue from 'vue-eslint-parser'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'
import { defineFlatConfig } from 'eslint-define-config'

export default defineFlatConfig([{
		...js.configs.recommended,
		ignores: ['assets/**'],
		// 插件
		plugins: {
			prettier: pluginPrettier,
		},
		rules: {
			...configPrettier.rules,
			...pluginPrettier.configs.recommended.rules,
			'import/no-extraneous-dependencies': 'off',
		},
	},
	{
		// 定义需要进行lint的文件类型，这里指定了所有扩展名为.vue的文件
		files: ['**/*.vue'],

		// 配置全局变量，指定它们为只读属性，防止在代码中被意外修改
		languageOptions: {
			globals: {},

			// 配置解析器选项，以支持Vue的特定语法，包括JSX和Vue的自定义指令
			parser: parserVue,
			parserOptions: {
				ecmaFeatures: {
					jsx: true, // 启用JSX
				},
				extraFileExtensions: ['.vue'], // 告诉解析器额外处理.vue文件
				sourceType: 'module', // 指定源代码类型为ES模块
			},
		},

		// 配置插件，启用Vue插件以支持Vue组件的linting
		plugins: {
			vue: pluginVue,
		},
		processor: pluginVue.processors['.vue'],
		rules: {
			...pluginVue.configs.base.rules,
			...pluginVue.configs['vue3-essential'].rules,
			...pluginVue.configs['vue3-recommended'].rules,
			'vue/valid-template-root': 'off', // template 模版不能为空
			'vue/multi-word-component-names': 'off', // 要求组件名总是多字的
			'vue/no-lone-template': 'off', //
			'vue/require-prop-type-constructor': 'off',
		},
	},
])