import { FriendMessageType } from '../PostMessageType/FriendMessageType';
import { GroupMessageType } from '../PostMessageType/GroupMessageType';
import { BaseWhiteListModType } from './BaseModType';

export type FriendMessageModType = BaseWhiteListModType & {
	type: 'friendMessageMod';
	handler: (msg: FriendMessageType) => void;
};

export type GroupMessageModType = BaseWhiteListModType & {
	type: 'groupMessageMod';
	handler: (msg: GroupMessageType) => void;
};
