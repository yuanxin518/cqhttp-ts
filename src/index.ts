import { useMessageMod } from './handler/Message/useMessageMod';
import { useNoticeMod } from './handler/Notice/useNoticeMod';
import test from './mods/friendMessageMod.ts/test';
import { testNotice } from './mods/testNotice';
import linkServer from './server/linkServer';

linkServer(8080);

useMessageMod([test([])]);
useNoticeMod([testNotice([159426420])]);
