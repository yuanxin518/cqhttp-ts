import { CqWebsocket } from '../server/linkServer';
import { GetLoginInfoApiResponseType, GetLoginInfoApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetLoginInfoApiType
): Promise<GetLoginInfoApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_login_info', param));
};
