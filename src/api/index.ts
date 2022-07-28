import sendGroupMessageApi from './sendGroupMessageApi';
import sendPrivateMessageApi from './sendPrivateMessageApi';
import sendGroupForwardMessageApi from './sendGroupForwardMessageApi';
import sendMessageApi from './sendMessageApi';
import markMsgAsReadApi from './MarkMsgAsReadApi';
import GetMessageApi from './GetMessageApi';
import GetImageApi from './GetImageApi';
import GetForwardMessageApi from './GetForwardMessageApi';
import deleteMessageApi from './deleteMessageApi';

export const CqApi = {
	markMsgAsReadApi,
	sendGroupForwardMessageApi,
	sendGroupMessageApi,
	sendPrivateMessageApi,
	sendMessageApi,
	GetMessageApi,
	GetImageApi,
	GetForwardMessageApi,
	deleteMessageApi,
};
