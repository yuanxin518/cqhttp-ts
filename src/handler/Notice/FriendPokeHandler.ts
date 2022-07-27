import { FriendAddType } from '../../types';
import { FriendPokeModType } from '../../types/Mod';
import modRun from '../modRun';

export const friendPokeMods: FriendPokeModType[] = [];
export default (notice: FriendAddType) => {
	modRun(friendPokeMods, notice, notice.user_id);
};
