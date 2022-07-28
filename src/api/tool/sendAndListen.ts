import WebSocket from 'ws';
import { SendObjType } from '../../types/api/SendObjType';

export default (ws: WebSocket, sendObj: SendObjType): Promise<any> => {
	return new Promise((resolve) => {
		const echo = sendObj.echo;
		ws.on('message', (res: Buffer) => {
			const resObj = JSON.parse(res.toString());

			if (resObj.status === 'ok' && resObj.echo === echo) {
				resolve(resObj.data);
			} else {
				resolve('api调用失败');
			}
		});

		ws.send(JSON.stringify(sendObj));
	});
};
