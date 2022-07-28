import { CqWebsocket } from '../server/linkServer';
import {
	UploadPrivateFileApiResponseType,
	UploadPrivateFileApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: UploadPrivateFileApiType
): Promise<UploadPrivateFileApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('upload_private_file', param)
	);
};
