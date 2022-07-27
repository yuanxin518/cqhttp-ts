import { PostNoticeType } from '../GeneralEventTypes';

/**
 * 其他客户端在线状态变更
 * https://docs.go-cqhttp.org/event/#%E5%85%B6%E4%BB%96%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%9C%A8%E7%BA%BF%E7%8A%B6%E6%80%81%E5%8F%98%E6%9B%B4
 */
export type ClientStatusUpdateType = PostNoticeType & {
	notice_type: 'client_status';
	/**
	 * 客户端信息
	 */
	client: {
		/**
		 * 客户端id
		 */
		app_id: number;
		/**
		 * 设备名称
		 */
		device_name: string;
		/**
		 * 设备类型
		 */
		device_kind: string;
	};
	online: boolean;
};
