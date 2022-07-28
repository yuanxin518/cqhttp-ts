import { CqWebsocket } from '../server/linkServer';
import {
	GetVersionInfoApiResponseType,
	GetVersionInfoApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetVersionInfoApiType
): Promise<GetVersionInfoApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_version_info', param));
};
