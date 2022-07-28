import { GroupHonorType } from '../Structure';
type talkativeObj = {
	user_id: number;
	nickname: string;
	avatar: string;
	day_count: number;
};
type listObj = {
	user_id: number;
	nickname: string;
	avatar: string;
	description: string;
};
/**
 * 获取群荣誉信息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E8%8D%A3%E8%AA%89%E4%BF%A1%E6%81%AF
 */
export type GetGroupHonorInfoApiType = {
	group_id: number;
	type: GroupHonorType | 'all';
};
export type GetGroupHonorInfoApiResponseType = {
	group_id: number;
	current_talkative: talkativeObj;
	talkative_list: listObj[];
	performer_list: listObj[];
	legend_list: listObj[];
	strong_newbie_list: listObj[];
	emotion_list: listObj[];
};
