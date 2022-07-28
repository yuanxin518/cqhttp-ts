import { CqWebsocket } from '../server/linkServer';
import {
	GetOnlineClientsApiResponseType,
	GetOnlineClientsApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetOnlineClientsApiType
): Promise<GetOnlineClientsApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_online_clients', param)
	);
};
