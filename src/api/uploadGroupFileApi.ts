import { CqWebsocket } from '../server/linkServer';
import {
	UploadGroupFileApiResponseType,
	UploadGroupFileApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: UploadGroupFileApiType
): Promise<UploadGroupFileApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('upload_group_file', param)
	);
};
