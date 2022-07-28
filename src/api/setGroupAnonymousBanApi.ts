import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupAnonymousBanApiResponseType,
	SetGroupAnonymousBanApiType,
} from '../types/api/SetGroupAnonymousBanApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupAnonymousBanApiType
): Promise<SetGroupAnonymousBanApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_group_anonymous_ban', param)
	);
};
