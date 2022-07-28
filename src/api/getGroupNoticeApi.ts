import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupNoticeApiResponseType,
	GetGroupNoticeApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupNoticeApiType
): Promise<GetGroupNoticeApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('_get_group_notice', param)
	);
};
