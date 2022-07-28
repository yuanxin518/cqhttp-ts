/**
 * 处理加好友请求
 * https://docs.go-cqhttp.org/api/#%E5%A4%84%E7%90%86%E5%8A%A0%E5%A5%BD%E5%8F%8B%E8%AF%B7%E6%B1%82
 */
export type SetFriendAddRequestApiType = {
	flag: string;
	/**
	 * 默认为同意 true
	 */
	approve?: boolean;
	/**
	 * 添加好友后的备注
	 */
	remark: string;
};

export type SetFriendAddRequestApiResponseType = {};
