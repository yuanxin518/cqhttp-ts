/**
 * 获取群信息
 * 
 * 这里提供了一个API用于获取群图片, group_id 为群号 https://p.qlogo.cn/gh/{group_id}/{group_id}/100
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E4%BF%A1%E6%81%AF
 */
export type GetGroupInfoApiType = {
	group_id: number;
	/**
	 * 默认不使用缓存。使用缓存可能更新不及时，但是响应更快
	 */
	no_cache?: boolean;
};

/**
 * 如果机器人尚未加入群, group_create_time, group_level, max_member_count 和 member_count 将会为0
 */
export type GetGroupInfoApiResponseType = {
	group_id: number;
	group_name: string;
	group_memo: string;
	group_create_time: number;
	group_level: string;
	member_count: number;
	max_member_count: number;
};
