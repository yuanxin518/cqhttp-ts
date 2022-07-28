import { Role, Sex } from '../Structure';

/**
 * 获取群成员信息
 *
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%88%90%E5%91%98%E4%BF%A1%E6%81%AF
 */
export type GetGroupMemberInfoApiType = {
	group_id: number;
	user_id: number;
	/**
	 * 是否不使用缓存（使用缓存可能更新不及时, 但响应更快）
	 */
	no_cache?: boolean;
};
export type GetGroupMemberInfoApiResponseType = {
	group_id: number;
	user_id: number;
	nickname: string;
	card: string;
	sex: Sex;
	age: number;
	area: string;
	join_time: number;
	last_sent_time: number;
	level: string;
	role: Role;
	/**
	 * 是否不良记录成员
	 */
	unfriendly: boolean;
	/**
	 * 专属头衔
	 */
	title: string;
	title_expire_time: number;
	card_changeable: boolean;
	shut_up_timestamp: number;
};
