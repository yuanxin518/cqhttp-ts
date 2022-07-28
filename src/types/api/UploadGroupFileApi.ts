/**
 * 上传群文件
 * https://docs.go-cqhttp.org/api/#%E4%B8%8A%E4%BC%A0%E7%BE%A4%E6%96%87%E4%BB%B6
 */
export type UploadGroupFileApiType = {
	group_id: number;
	file: string;
	name: string;
	folder: string;
};
export type UploadGroupFileApiResponseType = {};
