import { FriendAddType } from '../../types';
import { GroupAdminUpdateModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupAdminUpdateMods: GroupAdminUpdateModType[] = [];
export default (notice: FriendAddType) => {
	modRun(groupAdminUpdateMods, notice, notice.user_id);
};
