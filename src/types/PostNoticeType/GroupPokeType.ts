import { GeneralNoticePost } from '../GeneralPostType';

/**
 * 群内戳一戳
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E5%86%85%E6%88%B3%E4%B8%80%E6%88%B3
 */
export type GroupPokeType = GeneralNoticePost & {
	notice_type: 'notify';
	sub_type: 'poke';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 发送者qq
	 */
	user_id: number;
	/**
	 * 被戳者qq
	 */
	target_id: number;
};
