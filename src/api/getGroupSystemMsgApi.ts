import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupSystemMsgApiResponseType,
	GetGroupSystemMsgApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupSystemMsgApiType
): Promise<GetGroupSystemMsgApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_system_msg', param)
	);
};
