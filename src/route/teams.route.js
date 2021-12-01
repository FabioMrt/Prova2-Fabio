const express = require('express')
const teamsController = require('../controller/teams.controller')

const router = express.Router()

router.get('/', teamsController.listAll)

module.exports = router
