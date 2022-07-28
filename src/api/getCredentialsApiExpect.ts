import { CqWebsocket } from '../server/linkServer';
import {
	GetCredentialsApiType,
	GetCredentialsResponseApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: GetCredentialsApiType
): Promise<GetCredentialsResponseApiType> => {
	return sendAndListen(CqWebsocket, createSendPoint('get_credentials', param));
};
