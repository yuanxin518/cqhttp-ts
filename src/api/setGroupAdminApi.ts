import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupAdminApiResponseType,
	SetGroupAdminApiType,
} from '../types/api/SetGroupAdminApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupAdminApiType
): Promise<SetGroupAdminApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_group_admin', param));
};
