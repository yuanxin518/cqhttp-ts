/**
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%9B%BE%E7%89%87%E4%BF%A1%E6%81%AF
 */
export type GetImageApiType = {
	/**
	 * 图片缓存文件名
	 */
	file: string;
};

export type GetImageApiResponseType = {
	size: number;
	filename: string;
	url: string;
};
