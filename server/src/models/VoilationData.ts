import { DataTypes, Model, Optional } from 'sequelize';
import { config } from '../config/config';

interface ViolationDataAttributes {
	id: string;
	department: string;
	timeStamp: Date;
	violationType?: string;
	violationImagePath?: string;
}

export class ViolationData extends Model<ViolationDataAttributes> {
	declare id: string;
	declare department: string;
	declare timeStamp: Date;
	declare violationType: string;
	declare violationImagePath?: string;
}

ViolationData.init(
	{
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false
		},
		department: {
			type: DataTypes.STRING,
			allowNull: false
		},
		timeStamp: {
			type: DataTypes.STRING,
			allowNull: false
		},
		violationType: {
			type: DataTypes.STRING,
			allowNull: true
		},
		violationImagePath: {
			type: DataTypes.STRING,
			allowNull: true
		}
	},
	{
		sequelize: config.db,
		tableName: 'Violations'
	}
);

// UsersInstance.hasMany(PositionsInstance, { onDelete: 'cascade' });
// ProfileInstance.belongsTo(UsersInstance, { foreignKey: 'UsersInstanceId' });
// PositionsInstance.hasMany(ScriptsInstance, { onDelete: 'cascade' });
// ScriptsInstance.belongsTo(PositionsInstance, { foreignKey: 'PositionsInstanceId' });
