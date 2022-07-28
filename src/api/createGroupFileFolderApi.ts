import { CqWebsocket } from '../server/linkServer';
import {
	CreateGroupFileFolderApiResponseType,
	CreateGroupFileFolderApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: CreateGroupFileFolderApiType
): Promise<CreateGroupFileFolderApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('create_group_file_folder', param)
	);
};
