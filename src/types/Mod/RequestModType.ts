import { FriendAddRequestType } from '../PostRequestType/FriendAddRequestType';
import { GroupAddRequestType } from '../PostRequestType/GroupAddRequestType';
import { BaseModType } from './BaseModType';

/**
 * 收到好友请求
 */
export type FriendAddRequestModType = BaseModType & {
	type: 'friend';
	handler: (notice: FriendAddRequestType) => void;
};
export type GroupAddRequestModType = BaseModType & {
	type: 'group';
	handler: (request: GroupAddRequestType) => void;
};
