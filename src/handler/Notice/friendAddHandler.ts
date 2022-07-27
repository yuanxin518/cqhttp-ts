import { FriendAddType } from '../../types';
import { FriendAddModType } from '../../types/Mod';
import modRun from '../modRun';

export const friendAddMods: FriendAddModType[] = [];
export default (notice: FriendAddType) => {
	modRun(friendAddMods, notice);
};
