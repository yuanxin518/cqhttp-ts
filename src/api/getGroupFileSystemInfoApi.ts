import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupFileSystemInfoApiResponseType,
	GetGroupFileSystemInfoApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupFileSystemInfoApiType
): Promise<GetGroupFileSystemInfoApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_file_system_info', param)
	);
};
