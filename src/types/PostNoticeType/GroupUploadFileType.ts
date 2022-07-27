import { GeneralNoticePost } from '../GeneralPostType';

/**
 * https://docs.go-cqhttp.org/event/#%E7%BE%A4%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0
 */
export type GroupUploadFileType = GeneralNoticePost & {
	notice_type: 'group_upload';
	/**
	 * 群号
	 */
	group_id: number;
	/**
	 * 发送者qq
	 */
	user_id: number;
	file: {
		id: string;
		name: string;
		/**
		 * 字节数
		 */
		size: number;
		/**
		 * 暂时不知道有什么用
		 */
		busid: number;
	};
};
