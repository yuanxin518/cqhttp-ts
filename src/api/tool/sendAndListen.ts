import WebSocket from 'ws';

export default (ws: WebSocket, send: string): Promise<any> => {
	return new Promise((resolve) => {
		const sendObj = JSON.parse(send);
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
