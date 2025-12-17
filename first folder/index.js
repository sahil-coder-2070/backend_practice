import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express()


const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/exp', (req, res) => {
    res.send('This is working')
})

app.get('/example', (req, res) => {
    res.send('<h1> This is also working ,</h1>')
})

app.get('/chefyai', (req, res) => {
    res.send('<h2> Check this site www.chefyai.app.vercel </h2>')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
