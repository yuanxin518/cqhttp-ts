import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupNameApiResponseType,
	SetGroupNameApiType,
} from '../types/api/SetGroupNameApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupNameApiType
): Promise<SetGroupNameApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_group_name', param));
};
