import { CqWebsocket } from '../server/linkServer';
import { DeleteFriendApiResponseType, DeleteFriendApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: DeleteFriendApiType
): Promise<DeleteFriendApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('delete_friend', param));
};
