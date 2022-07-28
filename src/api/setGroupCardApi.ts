import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupCardApiResponseType,
	SetGroupCardApiType,
} from '../types/api/SetGroupCardApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupCardApiType
): Promise<SetGroupCardApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_group_card', param));
};
