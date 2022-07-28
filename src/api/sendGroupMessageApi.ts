import { CqWebsocket } from '../server/linkServer';
import {
	SendGroupMessageResponseType,
	SendGroupMessageType,
} from '../types/api/SendGroupMessageApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendGroupMessageType
): Promise<SendGroupMessageResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_group_msg', param));
};
