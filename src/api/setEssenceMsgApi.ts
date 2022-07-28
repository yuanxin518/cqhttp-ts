import {
	SetEssenceMsgApiResponseType,
	SetEssenceMsgApiType,
} from '../types/api';
import { CqWebsocket } from '../server/linkServer';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetEssenceMsgApiType
): Promise<SetEssenceMsgApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_essence_msg', param));
};
