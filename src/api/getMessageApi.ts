import { CqWebsocket } from '../server/linkServer';
import { GetMessageApiResponseType, GetMessageApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetMessageApiType
): Promise<GetMessageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_msg', param));
};
