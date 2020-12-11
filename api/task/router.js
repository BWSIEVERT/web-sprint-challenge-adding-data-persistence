// build your `/api/tasks` router here
const express = require('express')

const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.getTasks()
        const formattedTask = tasks.map(item => {
            item.completed = item.completed === 0 ? false : true
            return item
        })
        res.status(200).json(formattedTask)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const taskData = req.body
        const task = await Task.createTask(taskData)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router