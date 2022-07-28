import { SendObjType } from '../../types/api/SendObjType';

export default (pointName: string, params: Object) => {
	const echo = pointName + new Date().getTime();
	const paramObj: Record<string, string> = {};
	for (const item of Object.entries(params)) {
		paramObj[item[0]] = item[1];
	}
	return {
		action: pointName,
		params: paramObj,
		echo: echo,
	} as SendObjType;
};
