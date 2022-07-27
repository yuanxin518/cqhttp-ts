import { GroupRecallModType } from '../types/Mod/RecallModType';
import { GroupRecallType } from '../types/PostNoticeType/GroupRecallType';

export const testNotice = (whiteList: number[]): GroupRecallModType => {
	const handler = (msg: GroupRecallType) => {
		console.log('test');
	};

	return {
		type: 'groupRecallMod',
		whiteList,
		handler,
		name: '测试',
	};
};
