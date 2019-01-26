const express = require('express')
const cors = require('cors')

const app = express()
const port = 8888

app.use(cors())

app.get('/', (req, res) => {
    const serverData = {
        message: 'Hello ExpressJS app :)',
        now: new Date().toISOString(),
        random: Math.random(),
    }

    res.json(serverData).end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
