/**
 * 获取当前账号在线客户端列表
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E8%B4%A6%E5%8F%B7%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%88%B7%E7%AB%AF%E5%88%97%E8%A1%A8
 */
export type GetOnlineClientsApiType = {
	no_cache: boolean;
};
export type GetOnlineClientsApiResponseType = {
	clients: {
		app_id: number;
		device_name: string;
		device_kink: string;
	}[];
};
