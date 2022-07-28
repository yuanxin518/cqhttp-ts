/**
 * 下载文件到缓存目录
 * https://docs.go-cqhttp.org/api/#%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E5%88%B0%E7%BC%93%E5%AD%98%E7%9B%AE%E5%BD%95
 */
export type DownLoadFileApiType = {
	url: string;
	thread_count: number;
	/**
	 * 格式
	 * 1. User-Agent=YOUR_UA[\r\n]Referer=https://www.baidu.com
	 *  [\r\n] 为换行符, 使用http请求时请注意编码
	 * 2. ["User-Agent=YOUR_UA","Referer=https://www.baidu.com"]
	 */
	headers: string | string[];
};

export type DownLoadFileApiResponseType = {};
