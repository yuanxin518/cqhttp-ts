import { GroupRecallType } from '../PostNoticeType/GroupRecallType';
import { BaseModType } from './baseModType';

export type GroupRecallModType = BaseModType & {
	type: 'groupRecallMod';
	handler: (notice: GroupRecallType) => void;
};
