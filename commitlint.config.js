module.exports = {
	// 继承的规则
	extends: ['@commitlint/config-conventional'],
	// 自定义规则
	rules: {
		// @see https://commitlint.js.org/#/reference-rules
		// 提交类型枚举，git提交type必须是以下类型
		'type-enum': [
			2,
			'always',
			[
				'feat', // 新增功能
				'fix', // 修复缺陷
				'docs', // 文档变更
				'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
				'refactor', // 代码重构（不包括 bug 修复、功能新增）
				'perf', // 性能优化
				'test', // 添加疏漏测试或已有测试改动
				'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
				'ci', // 修改 CI 配置、脚本
				'revert', // 回滚 commit
				'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
			],
		],
		'subject-case': [0], // subject大小写不做校验
	},

	prompt: {
		// prettier-ignore
		types: [
			{ value: "feat", name: "特性:     ✨  新增功能", emoji: ":sparkles:" },
			{ value: "fix", name: "修复:     🐛  修复缺陷", emoji: ":bug:" },
			{ value: "docs", name: "文档:     📝  文档变更", emoji: ":memo:" },
			{ value: "style", name: "格式:     🌈  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
			{ value: "refactor", name: "重构:     🔄  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
			{ value: "perf", name: "性能:     🚀  性能优化", emoji: ":zap:" },
			{ value: "test", name: "测试:     🧪  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:" },
			{ value: "build", name: "构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）", emoji: ":package:" },
			{ value: "ci", name: "集成:     ⚙️  修改 CI 配置、脚本", emoji: ":ferris_wheel:" },
			{ value: "revert", name: "回退:     ↩️  回滚 commit", emoji: ":rewind:" },
			{ value: "chore", name: "其他:     🛠️  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:" },
		],
	},
}
