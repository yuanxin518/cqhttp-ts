import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupLeaveApiResponseType,
	SetGroupLeaveApiType,
} from '../types/api/SetGroupLeaveApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupLeaveApiType
): Promise<SetGroupLeaveApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_group_leave', param));
};
