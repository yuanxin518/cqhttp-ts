import { CqWebsocket } from '../server/linkServer';
import {
	DeleteEssenceMsgApiResponseType,
	DeleteEssenceMsgApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: DeleteEssenceMsgApiType
): Promise<DeleteEssenceMsgApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('delete_essence_msg', param)
	);
};
