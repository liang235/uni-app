export default {
	extends: ['stylelint-config-standard-scss', 'stylelint-config-standard-vue/scss', 'stylelint-config-recess-order'],
	plugins: ['stylelint-scss'],
	rules: {
		// https://stylelint.bootcss.com/user-guide/rules/list
		// https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules
		'no-empty-source': null, // 禁止 style 标签内容为空
		'no-descending-specificity': null, // 禁止低特异性选择符出现在覆盖高特异性选择符之后
		'no-duplicate-selectors': null, // 禁止重复选择器
		// 'declaration-block-trailing-semicolon': 'always', // 要求或禁止在声明块中使用尾随分号
		'declaration-block-no-redundant-longhand-properties': null, // 禁止可以组合为一个简略属性的手动属性
		'selector-class-pattern': null, // 为类选择器指定一个模式
		'value-no-vendor-prefix': null, // 禁止在值中使用供应商前缀
		'number-max-precision': null, // 限制数字中允许的小数点后数位
		'keyframes-name-pattern': null, // 期望关键帧名称为串格式 .foo-bar
		'block-no-empty': null, // 禁止使用空样式
		'at-rule-no-unknown': null, // 禁止使用未知at规则
		'property-no-unknown': null, // 禁止使用未知属性
		'font-family-no-missing-generic-family-keyword': null, // 禁止字体族中缺少通用族关键字
		'scss/double-slash-comment-empty-line-before': null, // 要求或禁止在//-comments前出现空行
		'scss/no-global-function-names': null, // 禁止使用全局函数名，因为这些全局函数现在位于内置的Sass模块中
		'scss/at-rule-no-unknown': null, // 禁止使用未知at规则。应该用来代替stylelint的at-rule-no-unknown
		'scss/at-mixin-pattern': null, // mixin 名称为串格式 .foo-bar
	},
}
