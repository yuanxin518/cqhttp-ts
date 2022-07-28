import { CqWebsocket } from '../server/linkServer';
import {
	SendGroupForwardMessageApiResponseType,
	SendGroupForwardMessageApiType,
} from '../types/api/SendGroupForwardMessageApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendGroupForwardMessageApiType
): Promise<SendGroupForwardMessageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_group_msg', param));
};
