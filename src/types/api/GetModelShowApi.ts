/**
 * 获取在线机型
 * 使用例子https://github.com/Mrs4s/go-cqhttp/pull/872#issuecomment-831180149
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E5%9C%A8%E7%BA%BF%E6%9C%BA%E5%9E%8B
 */
export type GetModelShowApiType = {
	model: string;
};
export type GetModelShowApiResponseType = {
	model_show: string;
	need_pay: boolean;
}[];
