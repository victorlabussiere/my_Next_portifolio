const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 8080

app.use(cors())

app.listen(port, () => {
    console.log('Server running on port:', port)
})

app.get('/download', async (req, res) => {
    const file = path.join(__dirname, 'static', 'curriculo.pdf')
    return res.download(file)
})