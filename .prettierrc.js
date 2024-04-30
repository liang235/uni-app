module.exports = {
	// 一行最多多少个字符
	printWidth: 150,
	// 指定每个缩进级别的空格数
	tabWidth: 4,
	// 使用制表符而不是空格缩进行
	useTabs: true,
	// 在语句末尾打印分号
	semi: false,
	// 使用单引号而不是双引号
	singleQuote: true,
	// 更改引用对象属性的时间 可选值"<as-needed|consistent|preserve>"
	quoteProps: 'as-needed',
	// 在JSX中使用单引号而不是双引号
	jsxSingleQuote: false,
	// 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
	trailingComma: 'es5',
	// 在对象文字中的括号之间打印空格
	/**
	 * true: { foo: bar }
	 * false: {foo: bar}
	 */
	bracketSpacing: true,
	/**
	 * 标签的反尖括号需要换行 默认false
	 * false
		<div
			className=""
			style={{}}
		>
	 * true
		<div
			className=""
			style={{}} >
	 */
	bracketSameLine: false,
	// 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
	arrowParens: 'always',
	// 使用默认的折行标准 always\never\preserve
	proseWrap: 'preserve',
	/**
	 * 指定在格式化 HTML 和 Vue 文件时如何处理空白符
	 * css：这意味着 Prettier 将尝试根据 CSS 规范解析和格式化 HTML 和 Vue 文件中的样式部分。这包括在选择器之间添加空行等。
	 * strict：这表示 Prettier 将尊重您在代码中使用的空格。它不会对空格进行任何更改。
	 * ignore：这将忽略 HTML 和 Vue 文件中的空白符，Prettier 不会尝试格式化它们
	 */
	htmlWhitespaceSensitivity: 'css',
	// Vue文件脚本和样式标签缩进
	vueIndentScriptAndStyle: false,
	// 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
	endOfLine: 'lf',
}
