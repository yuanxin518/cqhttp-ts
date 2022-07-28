/**
 * 注意，该api可能暂未被go-cqhttp支持。
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E8%AF%AD%E9%9F%B3
 */
export type GetRecordApiType = {
	file: string;
	out_format: 'mp3' | 'amr' | 'wma' | 'm4a' | 'spx' | 'ogg' | 'wav' | 'flac';
};

export type GetRecordApiResponseType = {
	file: string;
};
