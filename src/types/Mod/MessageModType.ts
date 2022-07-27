import { FriendMessageType } from '../PostMessageType/FriendMessageType';
import { GroupMessageType } from '../PostMessageType/GroupMessageType';
import { BaseModType } from './baseModType';

export type FriendMessageModType = BaseModType & {
	type: 'friendMessageMod';
	handler: (msg: FriendMessageType) => void;
};

export type GroupMessageModType = BaseModType & {
	type: 'groupMessageMod';
	handler: (msg: GroupMessageType) => void;
};
