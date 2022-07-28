import { CqWebsocket } from '../server/linkServer';
import {
	GetUnidirectionalFriendListApiResponseType,
	GetUnidirectionalFriendListApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetUnidirectionalFriendListApiType
): Promise<GetUnidirectionalFriendListApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_unidirectional_friend_list', param)
	);
};
