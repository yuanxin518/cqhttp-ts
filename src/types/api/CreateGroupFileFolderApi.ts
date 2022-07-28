export type CreateGroupFileFolderApiType = {
	group_id: number;
	name: string;
	/**
	 * 仅能设置为 /
	 */
	parent_id: string;
};
export type CreateGroupFileFolderApiResponseType = {};
