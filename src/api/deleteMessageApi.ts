import { CqWebsocket } from '../server/linkServer';
import {
	DeleteMessageApiReponseType,
	DeleteMessageApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: DeleteMessageApiType
): Promise<DeleteMessageApiReponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_forward_msg', param));
};
