import { CqWebsocket } from '../server/linkServer';
import {
	MarkMsgAsReadApiResponseType,
	MarkMsgAsReadApiType,
} from '../types/api';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: MarkMsgAsReadApiType
): Promise<MarkMsgAsReadApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('mark_msg_as_read', param));
};
