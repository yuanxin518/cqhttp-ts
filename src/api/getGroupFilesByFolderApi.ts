import { CqWebsocket } from '../server/linkServer';
import {
	GetGroupFilesByFolderApiResponseType,
	GetGroupFilesByFolderApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetGroupFilesByFolderApiType
): Promise<GetGroupFilesByFolderApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('get_group_files_by_folder', param)
	);
};
