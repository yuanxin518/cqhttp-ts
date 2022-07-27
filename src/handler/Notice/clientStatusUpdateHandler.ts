import { ClientStatusUpdateType } from '../../types';
import { ClientStatusUpdateModType } from '../../types/Mod';
import modRun from '../modRun';

export const clientStatusUpdateMods: ClientStatusUpdateModType[] = [];

export default (notice: ClientStatusUpdateType) => {
	modRun(clientStatusUpdateMods, notice);
};
