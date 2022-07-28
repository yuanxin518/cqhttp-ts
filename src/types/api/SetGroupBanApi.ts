/**
 * 群组踢人
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E8%B8%A2%E4%BA%BA
 */
export type SetGroupBanApiType = {
	group_id: number;
	user_id: number;
	/**
	 * 默认30*60秒, 0表示取消经验
	 */
	duration: number;
};

export type SetGroupBanApiResponseType = {};
