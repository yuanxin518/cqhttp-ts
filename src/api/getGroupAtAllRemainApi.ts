import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupAtAllRemainApiResponseType,
	GetGroupAtAllRemainApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupAtAllRemainApiType
): Promise<GetGroupAtAllRemainApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_at_all_remain', param)
	);
};
