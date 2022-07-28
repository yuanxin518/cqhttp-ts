import { CqWebsocket } from '../server/linkServer';
import { GetImageApiResponseType, GetImageApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (param: GetImageApiType): Promise<GetImageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_image', param));
};
