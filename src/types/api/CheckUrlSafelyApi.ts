/**
 * 检查链接安全性
 * https://docs.go-cqhttp.org/api/#%E6%A3%80%E6%9F%A5%E9%93%BE%E6%8E%A5%E5%AE%89%E5%85%A8%E6%80%A7
 */
export type CheckUrlSafelyApiType = {
	url: string;
};

export type CheckUrlSafelyApiResponseType = {
	level: 1 | 2 | 3;
};
