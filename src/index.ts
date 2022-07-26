import friendMessageHandler from './handler/Message/friendMessageHandler';
import linkServer from './server/linkServer';
import { FriendMessageType } from './types/PostMessageType/FriendMessageType';

const server = linkServer(8080);
