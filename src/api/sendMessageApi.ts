import { CqWebsocket } from '../server/linkServer';
import { SendMessageApiResponseType, SendMessageApiType } from '../types/api';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendMessageApiType
): Promise<SendMessageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_msg', param));
};
