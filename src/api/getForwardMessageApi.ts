import { CqWebsocket } from '../server/linkServer';
import {
	GetForwardMessageApiResponseType,
	GetForwardMessageApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetForwardMessageApiType
): Promise<GetForwardMessageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_forward_msg', param));
};
