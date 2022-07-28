/**
 * 群组全员禁言
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E5%85%A8%E5%91%98%E7%A6%81%E8%A8%80
 */
export type SetGroupWholeBanApiType = {
	group_id: number;
	/**
	 * 默认 禁言
	 */
	enable?: boolean;
};

export type SetGroupWholeBanApiResponseType = {};
