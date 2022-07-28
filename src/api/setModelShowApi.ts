import { CqWebsocket } from '../server/linkServer';
import { SetModelShowApiResponseType, SetModelShowApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetModelShowApiType
): Promise<SetModelShowApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('_set_model_show', param));
};
