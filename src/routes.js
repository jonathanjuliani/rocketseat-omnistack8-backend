const express = require('express')
const routes = express.Router()
const DevController = require('./controllers/DevController')
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:userId/likes', LikeController.store)
routes.post('/devs/:userId/dislikes', DislikeController.store)

module.exports = routes
