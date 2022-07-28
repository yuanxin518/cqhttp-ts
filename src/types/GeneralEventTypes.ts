export type GeneralEventTypes = 'message' | 'request' | 'notice' | 'meta_event';

/**
 * 消息上报子类型
 */
export type PostMessageType = 'group' | 'private';

/**
 * https://docs.go-cqhttp.org/reference/data_struct.html#post-notice-type
 */
export type PostNoticeType =
	| 'group_upload'
	| 'group_admin'
	| 'group_decrease'
	| 'group_increase'
	| 'group_ban'
	| 'friend_add'
	| 'group_recall'
	| 'friend_recall'
	| 'group_card'
	| 'offline_file'
	| 'client_status'
	| 'essence'
	| 'notify';

export type PostRequestType = 'friend' | 'group';
