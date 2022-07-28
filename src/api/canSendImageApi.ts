import { CqWebsocket } from '../server/linkServer';
import { CanSendImageApiResponseType, CanSendImageApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: CanSendImageApiType
): Promise<CanSendImageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('can_send_image', param));
};
