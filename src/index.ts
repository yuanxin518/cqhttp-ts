import { CqApi } from './api';
import { useMessageMod, useNoticeMod } from './handler';
import { messageModStore, noticeModStore, requestModStore } from './modMonitor';
import linkServer from './server/linkServer';
/**
 * 连接websocket
 */
export default linkServer;
// API调用入口
export { CqApi };

//postTypes
export * as PostTypes from './types';
// ModTypes
export * as ModTypes from './types/Mod';
// useMod
export const useMod = { useMessageMod, useNoticeMod };
// monitor
export const modMonitor = { messageModStore, noticeModStore, requestModStore };

// 可用内置type
//api发送和请求类型
export * as apis from './types/api';
