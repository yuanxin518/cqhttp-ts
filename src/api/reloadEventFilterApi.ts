import { CqWebsocket } from '../server/linkServer';
import {
	ReloadEventFilterApiResponseType,
	ReloadEventFilterApiType,
} from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: ReloadEventFilterApiType
): Promise<ReloadEventFilterApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('.reload_event_filter', param)
	);
};
