import { CqWebsocket } from '../server/linkServer';
import { GetCookieApiResponseType, GetCookieApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (param: GetCookieApiType): Promise<GetCookieApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_cookies', param));
};
