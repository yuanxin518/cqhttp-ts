export default (
	pointName: string,
	params: Object,
	echo?: string
	// ...params: { key: string; value: string }[]
) => {
	const paramObj: Record<string, string> = {};
	// params.forEach((param) => {
	// paramObj[param.key] = param.value;
	// });
	for (const item of Object.entries(params)) {
		paramObj[item[0]] = item[1];
	}
	return JSON.stringify({
		action: pointName,
		params: paramObj,
		echo: echo,
	});
};
