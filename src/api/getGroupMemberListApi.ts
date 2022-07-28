import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupMemberListApiResponseType,
	GetGroupMemberListApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupMemberListApiType
): Promise<GetGroupMemberListApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_member_list', param)
	);
};
