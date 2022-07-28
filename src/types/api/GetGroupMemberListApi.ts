import { Role, Sex } from '../Structure';

/**
 * 获取群成员列表
 */
export type GetGroupMemberListApiType = {
	group_id: number;
};

export type GetGroupMemberListApiResponseType = {
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
}[];
