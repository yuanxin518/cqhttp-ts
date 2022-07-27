import { GroupMessageModType } from '../../types/Mod/MessageModType';
import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';
import modRun from '../modRun';

/**
 * mod容器
 */
export const groupMessageMods: GroupMessageModType[] = [];

export default (msg: GroupMessageType) => {
	modRun(groupMessageMods, msg, msg.group_id);
};
