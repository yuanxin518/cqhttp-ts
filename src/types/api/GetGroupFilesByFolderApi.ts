import { File, Folder } from '../Structure';

/**
 * 获取群子目录文件列表
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%AD%90%E7%9B%AE%E5%BD%95%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8
 */
export type GetGroupFilesByFolderApiType = {
	group_id: number;
};
export type GetGroupFilesByFolderApiResponseType = {
	files: File[];
	folders: Folder[];
};
