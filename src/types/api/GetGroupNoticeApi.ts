/**
 * 获取群公告
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%BE%A4%E5%85%AC%E5%91%8A
 */
export type GetGroupNoticeApiType = {
	group_id: number;
};
export type GetGroupNoticeApiResponseType = {
	sender_id: number;
	publish_time: number;
	message: {
		text: string;
		images: {
			height: string;
			width: string;
			id: string;
		}[];
	};
};
