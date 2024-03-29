// app.js
import { config } from './config/config';
import express from 'express';
import http from 'http';
import routes from './routes/User';
import morgan from 'morgan';
import cors from 'cors';
import setupSocket from './socketserver';
// Import the socket functions

const router = express();
router.use(morgan('common'));
router.use(cors());
router.use(express.json());

const server = http.createServer(router);

config.db
	.sync()
	.then(() => {
		console.info('Connected to Postgresql Database');
		setupSocket(server); // Pass the server instance to the socket setup function
		StartServer();
	})
	.catch((err) => {
		console.log('Unable to connect', err);
	});

const StartServer = () => {
	router.use((req, res, next) => {
		next();
	});
	router.use(express.urlencoded({ extended: true }));
	router.use(express.json());

	router.use((req, res, next) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
		if (req.method === 'OPTIONS') {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
			return res.status(200).json({});
		}
		next();
	});

	router.use('/api', routes);

	router.get('/', (req, res, next) => res.status(200).json({ message: 'response from server 👍 ' }));
	router.use((req, res, next) => {
		const error = new Error('Not found');

		return res.status(404).json({ message: error.message });
	});

	server.listen(config.server.port, () => console.info(`Server running on port ${config.server.port}`));
};
