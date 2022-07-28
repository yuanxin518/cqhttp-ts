/**
 * 获取版本信息
 * https://docs.go-cqhttp.org/api/#%E8%8E%B7%E5%8F%96%E7%89%88%E6%9C%AC%E4%BF%A1%E6%81%AF
 */
export type GetVersionInfoApi = {
	/**
	 * 应用标识, 如 go-cqhttp 固定值
	 * 默认 go-cqhttp
	 */
	app_name: string;
	/**
	 * 应用版本
	 */
	app_version: string;
	app_full_name: string;
	/**
	 * OneBot标准版本
	 * 默认值v11
	 */
	protocol_version: string;
	coolq_edition: string;
	coolq_directory: string;
	'go-cqhttp': boolean;
	plugin_version: string;
	plugin_build_number: number;
	runtime_version: string;
	runtime_os: string;
	version: string;
	protocol: number;
};
