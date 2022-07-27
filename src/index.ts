import { CqApi } from './api';
import { useMessageMod, useNoticeMod } from './handler';
import linkServer from './server/linkServer';

/**
 * 连接websocket
 */
export default linkServer;
// API调用入口
export { CqApi };

/**
 * PostType
 */
export * as PostTypes from './types';
// ModTypes
export * as ModTypes from './types/Mod';
// useMod
export const useMod = { useMessageMod, useNoticeMod };
