/**
 * 获取群文件资源链接
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E8%B5%84%E6%BA%90%E9%93%BE%E6%8E%A5
 */
export type GetGroupFileUrlApiType = {
	group_id: number;
	file_id: string;
	busid: number;
};

export type GetGroupFileUrlApiResponseType = {
	url: string;
};
