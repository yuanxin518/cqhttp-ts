import { GroupMessageModType } from '../../types/Mod/MessageModType';
import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';

export default (whiteList: number[]): GroupMessageModType => {
	const handle = (msg: GroupMessageType) => {
		console.log(msg);
	};

	return {
		type: 'groupMessageMod',
		handle,
		whiteList,
		name: '测试',
	};
};
