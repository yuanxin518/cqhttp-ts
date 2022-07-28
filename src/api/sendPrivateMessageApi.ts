import { CqWebsocket } from '../server/linkServer';
import { SendPrivateMessageType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendPrivateMessageType
): Promise<SendPrivateMessageType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_private_msg', param));
};
