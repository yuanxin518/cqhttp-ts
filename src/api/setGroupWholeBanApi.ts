import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupWholeBanApiResponseType,
	SetGroupWholeBanApiType,
} from '../types/api/SetGroupWholeBanApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupWholeBanApiType
): Promise<SetGroupWholeBanApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_group_whole_ban', param)
	);
};
