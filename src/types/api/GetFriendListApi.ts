/**
 * 获取好友列表
 * 
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%A5%BD%E5%8F%8B%E5%88%97%E8%A1%A8
 */
export type GetFriendListApiType = {};

export type GetFriendListApiResponseType = {
	user_id: number;
	nickname: string;
	/**
	 * 备注名字
	 */
	remark: string;
}[];
