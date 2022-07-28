import { CqWebsocket } from '../server/linkServer';
import {
	SendPrivateMessageApiResponseType,
	SendPrivateMessageApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendPrivateMessageApiType
): Promise<SendPrivateMessageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_private_msg', param));
};
