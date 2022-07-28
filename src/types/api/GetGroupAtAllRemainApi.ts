/**
 * 获取群@ 全体成员剩余次数
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4-%E5%85%A8%E4%BD%93%E6%88%90%E5%91%98-%E5%89%A9%E4%BD%99%E6%AC%A1%E6%95%B0
 */
export type GetGroupAtAllRemainApiType = {
	group_id: number;
};

export type GetGroupAtAllRemainApiResponseType = {
	can_at_all: boolean;
	remain_at_all_count_for_group: number;
	remain_at_all_count_for_uni: number;
};
