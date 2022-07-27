import { GroupBanType } from '../../types';
import {  GroupPokeModType } from '../../types/Mod';
import modRun from '../modRun';

export const groupPokeMods: GroupPokeModType[] = [];

export default (notice: GroupBanType) => {
	modRun(groupPokeMods, notice, notice.group_id);
};
