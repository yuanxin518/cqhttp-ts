import WebSocket from 'ws';

export default (ws: WebSocket, send: string): Promise<any> => {
	return new Promise((resolve) => {
		const sendObj = JSON.parse(send);
		const echo = sendObj.echo;
		ws.on('message', (res: Buffer) => {
			const resObj = JSON.parse(res.toString());
			if (resObj.echo === echo) {
				if (resObj.status === 'ok') {
					resolve(resObj.data);
				} else {
					resolve(resObj);
				}
			}
		});

		ws.send(JSON.stringify(sendObj));
	});
};
