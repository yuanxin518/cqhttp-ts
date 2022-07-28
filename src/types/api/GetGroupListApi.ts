/**
 * 获取群列表
 * 
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%88%97%E8%A1%A8
 */
export type GetGroupListApiType = {};

export type GetGroupListApiResponseType = {
	group_id: number;
	group_name: string;
	group_memo: string;
	group_create_time: number;
	group_level: string;
	member_count: number;
	max_member_count: number;
}[];
