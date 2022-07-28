/**
 * 删除群文件
 * https://docs.go-cqhttp.org/api/#%E5%88%A0%E9%99%A4%E7%BE%A4%E6%96%87%E4%BB%B6
 */
export type DeleteGroupFileApiType = {
	group_id: number;
	file_id: string;
	busid: number;
};
export type DeleteGroupFileApiResponseType = {};
