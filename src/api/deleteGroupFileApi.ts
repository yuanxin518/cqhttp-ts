import { CqWebsocket } from '../server/linkServer';
import {
	DeleteGroupFileApiType,
	DeleteGroupFolderApiResponseType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: DeleteGroupFileApiType
): Promise<DeleteGroupFolderApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('delete_group_file', param)
	);
};
