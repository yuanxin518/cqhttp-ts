import { CqWebsocket } from '../server/linkServer';
import createSendPoint from './createSendPoint';
/**
 *
 * @param user_id 发送对象qq
 * @param message 发送内容
 * @param group_id 主动发起临时消息。机器人必须是管理员或者群主
 * @param auto_escape 消息内容是否作为纯文本解析(如果需要解析Cq码，则设置为true)
 */
export default function (
	user_id: number,
	message: string,
	group_id?: number,
	auto_escape: boolean = false
) {
	if (CqWebsocket === undefined) return;
	CqWebsocket.send(
		createSendPoint(
			'send_private_msg',
			{
				user_id,
				group_id,
				message,
				auto_escape,
			},
			'发送私聊消息'
		)
	);
}
