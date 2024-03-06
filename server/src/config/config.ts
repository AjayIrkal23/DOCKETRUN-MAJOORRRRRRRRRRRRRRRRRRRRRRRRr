import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;

const POSTGRES_USER = String(process.env.POSTGRES_USER);
const POSTGRES_HOST = String(process.env.POSTGRES_HOST);
const POSTGRES_PASSWORD = String(process.env.POSTGRES_PASSWORD);
const POSTGRES_DATABASE = String(process.env.POSTGRES_DATABASE);
const POSTGRES_PORT = Number(process.env.POSTGRES_PORT);
const Token = String(process.env.JWT_TOKEN);

const db = new Sequelize(POSTGRES_DATABASE, POSTGRES_USER, POSTGRES_PASSWORD, {
	host: POSTGRES_HOST,
	port: POSTGRES_PORT,
	dialect: 'postgres',
	logging: false
});

export const config = {
	db,
	server: { port: SERVER_PORT },

	Token
};
