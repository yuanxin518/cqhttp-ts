/**
 * 获取群文件系统信息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F%E4%BF%A1%E6%81%AF
 */
export type GetGroupFileSystemInfoApiType = {
	group_id: number;
};
export type GetGroupFileSystemInfoApiResponseType = {
	file_count: number;
	limit_count: number;
	used_space: number;
	total_space: number;
};
