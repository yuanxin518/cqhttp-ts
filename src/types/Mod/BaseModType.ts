/**
 * 提供一个需要实现白名单的类型。
 */
export type BaseWhiteListModType = {
	/**
	 * 设置mod的name，便于监控
	 */
	name: string;
	whiteList: number[];
};
