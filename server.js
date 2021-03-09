const express = require('express')
const app = express()

app.use(express.static('build'))

app.get('*', (req, resp) => {
    resp.sendFile(`${__dirname}/build/index.html`)
})

const port = process.env.PORT || 9000

app.listen(port, () => {
    console.log('Server listen on port: ', port)
})
