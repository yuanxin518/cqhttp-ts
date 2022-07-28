import { requestModStore } from '../../modMonitor';
import {
	FriendAddRequestModType,
	GroupAddRequestModType,
} from '../../types/Mod/RequestModType';
import { friendAddRequestMods } from './friendAddRequestHandler';
import { groupAddRequestMods } from './groupAddRequestHandler';

export const useRequestMod = (
	mod: Array<FriendAddRequestModType | GroupAddRequestModType>
) => {
	if (mod instanceof Array) {
		mod.forEach((item) => {
			switch (item.type) {
				case 'friend':
					friendAddRequestMods.push(item as any);
					break;
				case 'group':
					groupAddRequestMods.push(item as any);
					break;
				default:
					break;
			}
			requestModStore.push(item);
		});
	}
};
