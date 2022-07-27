import { ClientStatusUpdateModType } from '../../../dist';
import { ClientStatusUpdateType } from '../../types';
import modRun from '../modRun';

export const clientStatusUpdateMods: ClientStatusUpdateModType[] = [];

export default (notice: ClientStatusUpdateType) => {
	modRun(clientStatusUpdateMods, notice);
};
