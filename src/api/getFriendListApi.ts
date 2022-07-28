import { CqWebsocket } from '../server/linkServer';
import {
	GetFriendListApiResponseType,
	GetFriendListApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetFriendListApiType
): Promise<GetFriendListApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_friend_list', param));
};
