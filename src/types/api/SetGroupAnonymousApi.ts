/**
 * 注意：这个可能没有被go-cqhttp支持，请进入下列网址中查看是否支持。
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D
 */
export type SetGroupAnonymousApiType = {
	group_id: number;
	/**
	 * 是否允许匿名聊天
	 */
	enable?: boolean;
};
export type SetGroupAnonymousApiResponseType = {};
