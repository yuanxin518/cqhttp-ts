import { Role, Sex } from '../Structure';

export namespace MessageSender {
	type BaseSender = {
		user_id: number;
		nickname: string;
		sex: Sex;
		age: number;
	};
	export type Friend = BaseSender & {};
	export type Group = BaseSender & {
		card: string;
		area: string;
		level: string;
		role: Role;
		title: string;
	};
}
