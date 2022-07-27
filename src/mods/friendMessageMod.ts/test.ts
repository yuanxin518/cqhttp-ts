import { FriendMessageModType } from '../../types/Mod/FriendMessageModType';
import { FriendMessageType } from '../../types/PostMessageType/FriendMessageType';

export default (whiteList: number[]): FriendMessageModType => {
	const handle = (msg: FriendMessageType) => {
		console.log(msg);
	};

	return {
		handle,
		whiteList,
		name: '测试',
	};
};
