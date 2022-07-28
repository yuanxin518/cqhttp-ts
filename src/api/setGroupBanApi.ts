import { CqWebsocket } from '../server/linkServer';
import {
	SetGroupBanApiResponseType,
	SetGroupBanApiType,
} from '../types/api/SetGroupBanApi';
import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

/**
 * 注意 请查看该api的支持状态
 * https://docs.go-cqhttp.org/api/#%E7%BE%A4%E7%BB%84%E5%8C%BF%E5%90%8D
 */
export default (
	param: SetGroupBanApiType
): Promise<SetGroupBanApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('set_group_ban', param));
};
