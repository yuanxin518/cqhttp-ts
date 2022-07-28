/**
 * 注意： 该Api可能暂未被go-cqhttp支持。
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96-cookies
 */
export type GetCredentialsApiType = {
	domain?: string;
};

export type GetCredentialsResponseApiType = {
	cookies: string;
	csrf_token: number;
};
