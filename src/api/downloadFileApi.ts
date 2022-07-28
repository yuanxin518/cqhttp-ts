import { CqWebsocket } from '../server/linkServer';
import { DownLoadFileApiResponseType, DownLoadFileApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: DownLoadFileApiType
): Promise<DownLoadFileApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('download_file', param));
};
