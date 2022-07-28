import { CqWebsocket } from '../server/linkServer';
import { GetGroupListApiResponseType, GetGroupListApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupListApiType
): Promise<GetGroupListApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_group_list', param));
};
