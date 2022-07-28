import { CqWebsocket } from '../server/linkServer';
import { GetGroupInfoApiResponseType, GetGroupInfoApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupInfoApiType
): Promise<GetGroupInfoApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_group_info', param));
};
