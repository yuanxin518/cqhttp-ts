import { CqWebsocket } from '../server/linkServer';
import {
	GetStrangerInfoApiResponseType,
	GetStrangerInfoApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetStrangerInfoApiType
): Promise<GetStrangerInfoApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_stranger_info', param)
	);
};
