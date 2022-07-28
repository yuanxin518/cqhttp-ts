import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupMsgHistoryApiResponseType,
	GetGroupMsgHistoryApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupMsgHistoryApiType
): Promise<GetGroupMsgHistoryApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_msg_history', param)
	);
};
