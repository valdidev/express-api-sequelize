import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

import { Task } from './Task.js';

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

// one to many - relationships
Project.hasMany(Task, {
    foreignKey: 'projectId',
    sourceKey: 'id'
});

Task.belongsTo(Project, {
    foreignKey: 'projectId',
    targetId: 'id'
});