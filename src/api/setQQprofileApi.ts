import { CqWebsocket } from '../server/linkServer';
import { SetQQProfileType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (param: SetQQProfileType): Promise<SetQQProfileType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_qq_profile', param));
};
