import { FriendAddRequestType } from '../../types/PostRequestType/FriendAddRequestType';
import modRun from '../modRun';

export const friendAddRequestMods: FriendAddRequestType[] = [];

export default (request: FriendAddRequestType) => {
	modRun(friendAddRequestMods, request);
};
