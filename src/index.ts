import { CqApi } from './api';
import { useMessageMod } from './handler';
import { useNoticeMod } from './handler/Notice/useNoticeMod';
import linkServer from './server/linkServer';

export default linkServer;
export const useMod = { useMessageMod, useNoticeMod };
export { CqApi };
