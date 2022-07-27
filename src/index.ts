import { friendMessageMods } from './handler/Message/friendMessageHandler';
import linkServer from './server/linkServer';

const server = linkServer(8080);

friendMessageMods.push({
	handle: () => {
		console.log(2);
	},
});
