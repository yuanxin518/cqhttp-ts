import { CqWebsocket } from '../server/linkServer';
import {
	GetEssenceMsgListApiResponseType,
	GetEssenceMsgListApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetEssenceMsgListApiType
): Promise<GetEssenceMsgListApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_essence_msg_list', param)
	);
};
