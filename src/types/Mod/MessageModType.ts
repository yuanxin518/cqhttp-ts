import { FriendMessageType } from '../PostMessageType/FriendMessageType';
import { GroupMessageType } from '../PostMessageType/GroupMessageType';

export type FriendMessageModType = {
	type: 'friendMessageMod';
	/**
	 * 设置mod的name
	 */
	name: string;
	handle: (msg: FriendMessageType) => void;
	whiteList: number[];
};
export type GroupMessageModType = {
	type: 'groupMessageMod';
	/**
	 * 设置mod的name
	 */
	name: string;
	handle: (msg: GroupMessageType) => void;
	whiteList: number[];
};
