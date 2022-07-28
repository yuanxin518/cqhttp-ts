import { CqWebsocket } from '../server/linkServer';
import { CleanCacheApiResponseType, CleanCacheApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: CleanCacheApiType
): Promise<CleanCacheApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('clean_cache', param));
};
