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
	// groupRecallMods.forEach((n) => {
	// 	/**
	// 	 * 白名单为false，则不设置白名单
	// 	 */
	// 	if (typeof n.whiteList === 'boolean') {
	// 		n.handler(notice);
	// 		return;
	// 	}
	// 	if (n.whiteList.includes(notice.group_id)) {
	// 		n.handler(notice);
	// 	}
	// });
};
