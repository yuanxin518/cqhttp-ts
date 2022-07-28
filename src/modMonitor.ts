export type ModStore = {
	type: string;
	name: string;
	handler: Function;
	whiteList?: number[] | false;
};
export const messageModStore: ModStore[] = [];
export const noticeModStore: ModStore[] = [];
export const requestModStore: ModStore[] = [];
