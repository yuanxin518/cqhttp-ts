export type GetStatusApiType = {};
/**
 * 获取状态
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%8A%B6%E6%80%81
 */
export type GetStatusApiResponseType = {
	app_initialized: boolean;
	app_enabled: boolean;
	plugins_good: boolean;
	app_good: boolean;
	online: boolean;
	good: boolean;
	stat: {
		PacketReceived: number;
		PacketSent: number;
		PacketLost: number;
		MessageReceived: number;
		MessageSent: number;
		DisconnectTimes: number;
		LostTimes: number;
		LastMessageTime: number;
	};
};
