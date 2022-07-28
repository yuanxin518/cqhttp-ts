import { CqWebsocket } from '../server/linkServer';
import {
	CanSendRecordApiResponseType,
	CanSendRecordApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: CanSendRecordApiType
): Promise<CanSendRecordApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('can_send_record', param));
};
