import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupHonorInfoApiResponseType,
	GetGroupHonorInfoApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupHonorInfoApiType
): Promise<GetGroupHonorInfoApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_honor_info', param)
	);
};
