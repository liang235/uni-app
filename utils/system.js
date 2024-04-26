const SYSTEM_INFO = uni.getSystemInfoSync()

// 获取状态栏高度
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15

// 获取菜单按钮高度
export const getTitleBarHeight = () => {
	// 获取菜单按钮边界坐标
	if (uni.getMenuButtonBoundingClientRect) {
		let { top, height } = uni.getMenuButtonBoundingClientRect()
		// 返回高度 + 状态栏高度 * 2
		return height + (top - getStatusBarHeight()) * 2
	} else {
		// 默认高度
		return 40
	}
}

// 获取导航栏高度
export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight()

// 获取左图标左边距离
export const getLeftIconLeft = () => {
	// #ifdef MP-TOUTIAO
	let { leftIcon: { left, width } } = tt.getCustomButtonBoundingClientRect()
	return left + parseInt(width);
	// #endif

	// #ifndef MP-TOUTIAO
	return 0
	// #endif	
}