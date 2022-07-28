import { CqWebsocket } from '../server/linkServer';
import { GetCSRFTokenApiResponseType, GetCSRFTokenApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetCSRFTokenApiType
): Promise<GetCSRFTokenApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_csrf_token', param));
};
