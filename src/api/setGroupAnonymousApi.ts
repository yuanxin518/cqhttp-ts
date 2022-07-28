import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupAnonymousApiResponseType,
	SetGroupAnonymousApiType,
} from '../types/api/SetGroupAnonymousApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

/**
 * 注意 请查看该api的支持状态
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D
 */
export default (
	param: SetGroupAnonymousApiType
): Promise<SetGroupAnonymousApiResponseType> => {
	return sendAndListen(
		CqWebsocket,
		createSendPoint('set_group_anonymous', param)
	);
};
