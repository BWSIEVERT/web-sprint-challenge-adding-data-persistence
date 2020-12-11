// build your `/api/resources` router here
const express = require('express')

const Resource = require('./model')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const resources = await Resource.getResources()
        res.status(200).json(resources)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const resourceData = req.body
        const resource = await Resource.createResource(resourceData)
        res.status(200).json(resource)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router