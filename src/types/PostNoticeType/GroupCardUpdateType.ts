import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群成员名片更新。仅在收到消息时校验卡片
 * 当名片为空时 card_xx 字段为空字符串, 并不是昵称
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E6%88%90%E5%91%98%E5%90%8D%E7%89%87%E6%9B%B4%E6%96%B0
 */
export type GroupCardUpdateType = GeneralNoticePost & {
	notice_type: 'group_card';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 成员id
	 */
	user_id: number;
	/**
	 * 新名片
	 */
	card_new: string;
	/**
	 * 旧名片
	 */
	card_old: string;
};
