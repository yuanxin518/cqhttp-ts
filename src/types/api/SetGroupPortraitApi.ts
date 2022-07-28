/**
 * 设置群头像
 * file的规则 请https://docs.go-cqhttp.org/api/#%E6%B8%85%E7%90%86%E7%BC%93%E5%AD%98
 */
export type SetGroupPortraitApiType = {
	group_id: number;
	file: string;
	/**
	 * 表示是否使用已经缓存的文件
	 */
	cache: number;
};
export type SetGroupPortraitApiResponseType = {};
