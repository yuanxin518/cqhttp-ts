import { CqWebsocket } from '../server/linkServer';
import {
	SendGroupSignApiResponseType,
	SendGroupSignApiType,
} from '../types/api/SendGroupSignApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendGroupSignApiType
): Promise<SendGroupSignApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('send_group_sign', param));
};
