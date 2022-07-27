import { GroupMessageModType } from '../../types/Mod/MessageModType';
import { GroupMessageType } from '../../types/PostMessageType/GroupMessageType';

export default (whiteList: number[]): GroupMessageModType => {
	const handler = (msg: GroupMessageType) => {
		console.log(msg);
	};

	return {
		type: 'groupMessageMod',
		handler,
		whiteList,
		name: '测试',
	};
};
