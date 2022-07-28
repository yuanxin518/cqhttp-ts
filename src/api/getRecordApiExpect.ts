import { CqWebsocket } from '../server/linkServer';
import { GetRecordApiResponseType, GetRecordApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (param: GetRecordApiType): Promise<GetRecordApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_record', param));
};
