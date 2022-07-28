/**
 * 获取登录号信息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%99%BB%E5%BD%95%E5%8F%B7%E4%BF%A1%E6%81%AF
 */
export type GetLoginInfoApiType = {};
export type GetLoginInfoApiResponseType = {
	user_id: number;
	nickname: string;
};
