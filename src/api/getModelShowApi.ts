import { CqWebsocket } from '../server/linkServer';
import { GetModelShowApiResponseType, GetModelShowApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetModelShowApiType
): Promise<GetModelShowApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('_get_model_show', param));
};
