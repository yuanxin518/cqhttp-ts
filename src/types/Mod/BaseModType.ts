/**
 * 白名单
 * 名字
 */
export type BaseWhiteListModType = {
	/**
	 * 设置mod的name，便于监控
	 */
	name: string;
	whiteList: number[] | false;
};
/**
 * 名字
 */
export type BaseModType = {
	name: string;
};
