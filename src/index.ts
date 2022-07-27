import { useMessageMod } from './handler/Message/useMessageMod';
import test from './mods/friendMessageMod.ts/test';
import linkServer from './server/linkServer';

linkServer(8080);

useMessageMod([test([])]);
