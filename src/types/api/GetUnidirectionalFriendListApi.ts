/**
 * 获取单项好友列表
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%8D%95%E5%90%91%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8
 */
 export type GetUnidirectionalFriendListApiType = {};

 export type GetUnidirectionalFriendListApiResponseType = {
	 user_id: number;
	 nickname: string;
	 source: string;
 }[];
 