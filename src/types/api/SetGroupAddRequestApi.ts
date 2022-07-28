/**
 * https://docs.go-cqhttp.org/api/#%E5%A4%84%E7%90%86%E5%8A%A0%E7%BE%A4%E8%AF%B7%E6%B1%82-%E9%82%80%E8%AF%B7
 */
export type SetGroupAddRequestApiType = {
	flag: string;
	/**
	 * 需要和sub_type字段相符
	 */
	sub_type: 'add' | 'invite';
	/**
	 * 默认为同意请求 true
	 */
	approve?: boolean;
	/**
	 * 拒绝理由
	 */
	reason?: string;
};

export type SetGroupAddRequestApiResponseType = {};
