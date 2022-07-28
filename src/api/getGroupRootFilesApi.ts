import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupRootFilesApiResponseType,
	GetGroupRootFilesApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupRootFilesApiType
): Promise<GetGroupRootFilesApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_root_files', param)
	);
};
