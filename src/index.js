const express = require('express')
const teamsRoute = require('./route/teams.route')

const app = express()
app.use(express.json())
app.use('/api/v1/teams', teamsRoute)

const PORT = 8087

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
