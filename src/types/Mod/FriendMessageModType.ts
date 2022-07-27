import { FriendMessageType } from '../PostMessageType/FriendMessageType';

export type FriendMessageModType = {
	/**
	 * 设置mod的name
	 */
	name: string;
	handle: (msg: FriendMessageType) => void;
	whiteList: number[];
};
