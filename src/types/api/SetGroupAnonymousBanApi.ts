import { Anonymous } from '../Structure';
/**
 * 群组匿名用户禁言
 * anonymous 和 anonymous_flag 两者任选其一传入即可, 若都传入, 则使用 anonymous。
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D%E7%94%A8%E6%88%B7%E7%A6%81%E8%A8%80
 */
export type SetGroupAnonymousBanApiType = {
	group_id: number;
	/**
	 *
	 */
	anonymous?: Anonymous;
	/**
	 * 从群消息上报的数据中获得
	 */
	anonymous_flag?: string;
	/**
	 * 默认30*60秒，无法取消匿名用户禁言
	 */
	duration: number;
};

export type SetGroupAnonymousBanApiResponseType = {};
