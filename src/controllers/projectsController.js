import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {

    try {
        // throw new Error('query error');
        const projects = await Project.findAll();

        res.json(projects);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};
//// sample of two ways to do
// findByPk
/* export const getProject = async (req, res) => {
    try {

        const { id } = req.params;
        
        const project = await Project.findByPk(id);

        res.json(project);
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}; */

// findOne
export const getProject = async (req, res) => {

    try {

        const { id } = req.params;

        const project = await Project.findOne({
            where: {
                id: id
            }
        });

        if (!project) return res.status(404).json({ message: 'Project does not exists' });

        res.json(project);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const createProject = async (req, res) => {

    try {
        const { name, priority, description } = req.body;

        const newProject = await Project.create({
            name,
            priority,
            description
        });

        res.json(newProject);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateProject = async (req, res) => {
    //// update in 2 steps
    try {

        const { id } = req.params;
        const { name, priority, description } = req.body;
        // 1. bring a tuple and modify in local
        const project = await Project.findByPk(id);
        project.name = name;
        project.priority = priority;
        project.description = description;
        // 2. save with new changes in the db
        await project.save();

        res.json(project);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


};

export const deleteProject = async (req, res) => {

    try {

        await Project.destroy({
            where: {
                id: req.params.id
            }
        });

        res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProjectTasks = async (req, res) => {
    const { id } = req.params;
    const tasks = await Task.findAll({
        where: {projectId: id}
    });
    res.json(tasks);
};