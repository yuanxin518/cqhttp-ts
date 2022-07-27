import { ClientStatusUpdateType } from '../PostNoticeType/ClientStatusUpdateType';
import { FriendMessageRecallType } from '../PostNoticeType/FriendMessageRecallType';
import { FriendPokeType } from '../PostNoticeType/FriendPokeType';
import { GroupAdminUpdateType } from '../PostNoticeType/GroupAdminUpdateType';
import { GroupBanType } from '../PostNoticeType/GroupBanType';
import { GroupCardUpdateType } from '../PostNoticeType/GroupCardUpdateType';
import { GroupHonorUpdateType } from '../PostNoticeType/GroupHonorUpdateType';
import { GroupMemberDecreaseType } from '../PostNoticeType/GroupMemberDecreaseType';
import { GroupMemberIncreaseType } from '../PostNoticeType/GroupMemberIncreaseType';
import { GroupMessageRecallType } from '../PostNoticeType/GroupMessageRecallType';
import { GroupPokeType } from '../PostNoticeType/GroupPokeType';
import { GroupUploadFileType } from '../PostNoticeType/GroupUploadFileType';
import { BaseModType, BaseWhiteListModType } from './BaseModType';
/**
 * 客户端状态信息变更
 */
export type ClientStatusUpdateModType = BaseModType & {
	type: 'clientStatusUpdateMod';
	handler: (notice: ClientStatusUpdateType) => void;
};
/**
 * 好友添加
 */
export type FriendAddModType = BaseModType & {
	type: 'friendAddMod';
	handler: (notice: ClientStatusUpdateType) => void;
};

/**
 * 好友消息撤回
 */
export type FriendRecallModType = BaseWhiteListModType & {
	type: 'friendRecallMod';
	handler: (notice: FriendMessageRecallType) => void;
};
/**
 * 好友戳一戳
 */
export type FriendPokeModType = BaseWhiteListModType & {
	type: 'friendPokeMod';
	handler: (notice: FriendPokeType) => void;
};
/**
 * 群管理员变更
 */
export type GroupAdminUpdateModType = BaseWhiteListModType & {
	type: 'groupAdminUpdateMod';
	handler: (notice: GroupAdminUpdateType) => void;
};
/**
 * 群禁言
 */
export type GroupBanModType = BaseWhiteListModType & {
	type: 'groupBanMod';
	handler: (notice: GroupBanType) => void;
};
/**
 * 群成员卡片更新
 */
export type GroupCardUpdateModType = BaseWhiteListModType & {
	type: 'groupCardUpdateMod';
	handler: (notice: GroupCardUpdateType) => void;
};
/**
 * 群精华消息事件
 */
export type GroupEssenceModType = BaseWhiteListModType & {
	type: 'groupEssenceMod';
	handler: (notice: GroupEssenceModType) => void;
};
/**
 * 群成员荣誉等级变更
 */
export type GroupHonorUpdateModType = BaseWhiteListModType & {
	type: 'groupHonorUpdateMod';
	handler: (notice: GroupHonorUpdateType) => void;
};
/**
 * 群红包幸运王
 */
export type GroupLuckyKingModType = BaseWhiteListModType & {
	type: 'groupLuckyKingMod';
	handler: (notice: GroupLuckyKingModType) => void;
};
/**
 * 群成员减少
 */
export type GroupMemberDecreaseModType = BaseWhiteListModType & {
	type: 'groupMemberDecreaseMod';
	handler: (notice: GroupMemberDecreaseType) => void;
};
/**
 * 群成员增加
 */
export type GroupMemberIncreaseModType = BaseWhiteListModType & {
	type: 'groupMemberIncreaseMod';
	handler: (notice: GroupMemberIncreaseType) => void;
};
/**
 * 群消息撤回
 */
export type GroupMessageRecallModType = BaseWhiteListModType & {
	type: 'groupMessageRecallMod';
	handler: (notice: GroupMessageRecallType) => void;
};
/**
 * 群戳一戳
 */
export type GroupPokeModType = BaseWhiteListModType & {
	type: 'groupPokeMod';
	handler: (notice: GroupPokeType) => void;
};
/**
 * 群文件上传
 */
export type GroupUploadFileModType = BaseWhiteListModType & {
	type: 'groupUploadFileMod';
	handler: (notice: GroupUploadFileType) => void;
};
/**
 * 接受离线消息
 */
export type ReceiveOfflineType = BaseWhiteListModType & {
	type: 'receiveOfflineMod';
	handler: (notice: ReceiveOfflineType) => void;
};
