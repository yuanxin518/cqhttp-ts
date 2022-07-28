import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupFileUrlApiResponseType,
	GetGroupFileUrlApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupFileUrlApiType
): Promise<GetGroupFileUrlApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_file_url', param)
	);
};
