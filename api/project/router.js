// build your `/api/projects` router here
const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const projects = await Project.getProjects()
        const formattedData = projects.map(item => {
            item.completed = item.completed === 0 ? false : true
            return item
        })
        res.status(200).json(formattedData)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    if (!req.body.completed) {
        req.body.completed = false
    }
    try {
        const project = await Project.createProject(req.body)
        project.completed = project.completed === 0 ? false : true
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router