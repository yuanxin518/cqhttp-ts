import { useFriendMessageMod } from './handler/Message/friendMessageHandler';
import test from './mods/friendMessageMod.ts/test';
import linkServer from './server/linkServer';

linkServer(8080);

useFriendMessageMod([test([2389451262])]);
