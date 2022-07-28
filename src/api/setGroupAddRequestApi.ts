import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupAddRequestApiResponseType,
	SetGroupAddRequestApiType,
} from '../types/api/SetGroupAddRequestApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupAddRequestApiType
): Promise<SetGroupAddRequestApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_group_add_request', param)
	);
};
