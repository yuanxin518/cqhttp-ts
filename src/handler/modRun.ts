/**
 * 用于将mod添加到mod列表中
 */
export default (mods: any[], post: any, id?: number) => {
	mods.forEach((mod) => {
		if (id === undefined) {
			mod.handler(post);
			return;
		}
		if (mod.whiteList === undefined) {
			mod.handler(post);
			return;
		}
		if (typeof mod.whiteList === 'boolean') {
			mod.handler(post);
			return;
		}
		if (mod.whiteList.includes(id)) {
			mod.handler(post);
		}
	});
};
