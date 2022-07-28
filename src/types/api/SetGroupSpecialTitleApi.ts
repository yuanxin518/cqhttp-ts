/**
 * 设置群组专属头衔
 * https://docs.go-cqhttp.org/api/#%E8%AE%BE%E7%BD%AE%E7%BE%A4%E7%BB%84%E4%B8%93%E5%B1%9E%E5%A4%B4%E8%A1%94
 */
export type SetGroupSpecialTitleApiType = {
	group_id: number;
	user_id: number;
	/**
	 * 不填或者空字符串表示删除
	 */
	special_title?: string;
	/**
	 * 专属头衔有效期, 单位秒, -1 表示永久, 不过此项似乎没有效果, 可能是只有某些特殊的时间长度有效, 有待测试
	 */
	duration?: number;
};

export type SetGroupSpecialTitleApiResponseType = {};
