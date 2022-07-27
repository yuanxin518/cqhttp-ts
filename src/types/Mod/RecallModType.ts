import { GroupRecallType } from '../PostNoticeType/GroupRecallType';
import { BaseWhiteListModType } from './BaseModType';

export type GroupRecallModType = BaseWhiteListModType & {
	type: 'groupRecallMod';
	handler: (notice: GroupRecallType) => void;
};
