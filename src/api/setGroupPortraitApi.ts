import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupPortraitApiResponseType,
	SetGroupPortraitApiType,
} from '../types/api';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupPortraitApiType
): Promise<SetGroupPortraitApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_group_portrait', param)
	);
};
