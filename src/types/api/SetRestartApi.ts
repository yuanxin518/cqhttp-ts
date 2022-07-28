/**
 * 重启go-cqhttp
 * 由于重启 go-cqhttp 实现同时需要重启 API 服务, 这意味着当前的 API 请求会被中断, 因此需要异步地重启, 接口返回的 status 是 async。
 */
export type SetRestartApiType = {
	/**
	 * 要延迟的毫秒数, 如果默认情况下无法重启, 可以尝试设置延迟为 2000 左右
	 */
	delay: number;
};
export type SetRestartApiResponseType = {};
