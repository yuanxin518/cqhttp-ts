import { CqWebsocket } from '../server/linkServer';
import {
	CheckUrlSafelyApiResponseType,
	CheckUrlSafelyApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: CheckUrlSafelyApiType
): Promise<CheckUrlSafelyApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('check_url_safely', param));
};
