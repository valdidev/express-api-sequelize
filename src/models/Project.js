import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const Project = sequelize.define('Project',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        }
    },
    // options
    {
        timestamps: false,
        
    }
);