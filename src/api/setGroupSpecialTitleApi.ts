import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupSpecialTitleApiResponseType,
	SetGroupSpecialTitleApiType,
} from '../types/api/SetGroupSpecialTitleApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (
	param: SetGroupSpecialTitleApiType
): Promise<SetGroupSpecialTitleApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_group_special_title', param)
	);
};
