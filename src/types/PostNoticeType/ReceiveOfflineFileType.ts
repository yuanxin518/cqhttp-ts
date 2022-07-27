import { GeneralPost } from '../GeneralPostType';

export type ReceiveOfflineFileType = GeneralPost & {
	/**
	 * 发送者qq
	 */
	user_id: number;
	/**
	 * 文件数据
	 */
	file: {
		/**
		 * 文件名
		 */
		name: string;
		/**
		 * 文件大小
		 */
		size: number;
		/**
		 * 下载链接
		 */
		url: string;
	};
};
