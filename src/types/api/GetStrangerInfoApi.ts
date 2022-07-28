import { Sex } from '../Structure';
/**
 * 获取陌生人信息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E9%99%8C%E7%94%9F%E4%BA%BA%E4%BF%A1%E6%81%AF
 */
export type GetStrangerInfoApiType = {
	user_id: number;
	no_cache?: boolean;
};
export type GetStrangerInfoApiResponseType = {
	user_id: number;
	nickname: string;
	sex: Sex;
	age: number;
	qid: string;
	level: number;
	login_days: number;
};
