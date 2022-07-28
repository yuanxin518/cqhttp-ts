/**
 * 图片OCR
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E4%B8%AD%E6%96%87%E5%88%86%E8%AF%8D-%E9%9A%90%E8%97%8F-api
 */
export type OcrImageApiType = {
	image: string;
};

export type OcrImageApiResponseType = {
	textx: {
		text: string;
		confidence: number;
		/**
		 * 坐标
		 */
		coordinates: any;
	}[];
};
