import {
	SetFriendAddRequestApiResponseType,
	SetFriendAddRequestApiType,
} from '../types/api';
import { CqWebsocket } from '../server/linkServer';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetFriendAddRequestApiType
): Promise<SetFriendAddRequestApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_friend_add_request', param)
	);
};
