import { CqWebsocket } from '../server/linkServer';
import { GetStatusApiResponseType, GetStatusApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (param: GetStatusApiType): Promise<GetStatusApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_status', param));
};
