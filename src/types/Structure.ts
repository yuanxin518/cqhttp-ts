export type Sex = 'male' | 'female' | 'unknown';
export type Role = 'owner' | 'admin' | 'member';
/**
 * 群荣誉类型
 */
export type GroupHonorType =
	| 'talkative'
	| 'performer'
	| 'legend'
	| 'strong_newbie'
	| 'emotion';
/**
 * 匿名消息对象
 */
export type Anonymous = {
	id: number;
	name: string;
	flase: string;
};

/**
 * 合并消息转发节点
 */
export type ForwardNode = {
	id: number;
	name: string;
	/**
	 * 发送者qq
	 */
	uin: number;
	content: string;
	seq: string;
};

/**
 * 合并转发消息内容
 */
export type ForwardMessage = {
	content: string;
	sender: {
		nickname: string;
		user_id: number;
	};
	time: number;
};

/**
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E8%B5%84%E6%BA%90%E9%93%BE%E6%8E%A5
 */
export type File = {
	group_id: number;
	file_id: string;
	file_name: string;
	busid: number;
	file_size: number;
	upload_time: number;
	dead_time: number;
	modify_time: number;
	download_times: number;
	uploader: number;
	uploader_name: number;
};
export type Folder = {
	group_id: number;
	folder_id: string;
	folder_name: string;
	create_time: number;
	creator: number;
	creator_name: string;
	total_file_count: number;
};
