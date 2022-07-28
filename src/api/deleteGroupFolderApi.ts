import { CqWebsocket } from '../server/linkServer';
import {
	DeleteGroupFolderApiResponseType,
	DeleteGroupFolderApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: DeleteGroupFolderApiType
): Promise<DeleteGroupFolderApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('delete_group_folder', param)
	);
};
