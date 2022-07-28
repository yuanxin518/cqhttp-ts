import { CqWebsocket } from '../server/linkServer';
import { SetRestartApiResponseType, SetRestartApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetRestartApiType
): Promise<SetRestartApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_restart', param));
};
