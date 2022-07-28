import { CqWebsocket } from '../server/linkServer';
import { OcrImageApiResponseType, OcrImageApiType } from '../types/api';

import createSendPoint from './tool/createSendPoint';
import sendAndListen from './tool/sendAndListen';

export default (param: OcrImageApiType): Promise<OcrImageApiResponseType> => {
	return sendAndListen(CqWebsocket, createSendPoint('.ocr_image', param));
};
