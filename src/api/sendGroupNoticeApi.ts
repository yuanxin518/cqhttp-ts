import { CqWebsocket } from '../server/linkServer';
import {
	SendGroupNoticeApiResponseType,
	SendGroupNoticeApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SendGroupNoticeApiType
): Promise<SendGroupNoticeApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('_send_group_notice', param)
	);
};
