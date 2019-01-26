const express = require('express')

const app = express()
const port = 8888

app.get('/', (req, res) => {
    const serverData = {
        message: 'Hello ExpressJS app :)',
        now: new Date().toDateString(),
        random: Math.random(),
    }
    
    res.json(serverData).end()
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
