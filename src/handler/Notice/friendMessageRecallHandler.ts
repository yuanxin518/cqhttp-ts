import { FriendAddType } from '../../types';
import { FriendMessageRecallModType } from '../../types/Mod';
import modRun from '../modRun';

export const friendMessageRecallMods: FriendMessageRecallModType[] = [];
export default (notice: FriendAddType) => {
	modRun(friendMessageRecallMods, notice, notice.user_id);
};
