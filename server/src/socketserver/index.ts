// socketFunctions.js
import { Server } from 'socket.io';

const setupSocket = (server: any) => {
	const io = new Server(server);

	io.on('connection', (socket) => {
		console.log('A user connected');

		// Handle events here

		socket.on('disconnect', () => {
			console.log('User disconnected');
		});
	});
};

export default setupSocket;
