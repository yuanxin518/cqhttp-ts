import { ClientStatusUpdateType } from '../../types';
import { GroupAddRequestModType } from '../../types/Mod/RequestModType';
import modRun from '../modRun';

export const groupAddRequestMods: GroupAddRequestModType[] = [];

export default (request: ClientStatusUpdateType) => {
	modRun(groupAddRequestMods, request);
};
