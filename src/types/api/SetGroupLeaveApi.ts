/**
 * 退出群组
 * https://docs.go-cqhttp.org/api/#%E9%80%80%E5%87%BA%E7%BE%A4%E7%BB%84
 */
export type SetGroupLeaveApiType = {
	group_id: number;
	/**
	 * 是否解散。如果登录号是群主，则仅在此项为true是解散
	 */
	is_dismiss?: boolean;
};

export type SetGroupLeaveApiResponseType = {};
