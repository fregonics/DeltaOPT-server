import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.send('test')
})


app.listen(8080)