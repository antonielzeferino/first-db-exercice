const express = require('express')
const router = require('./router')

const app = express()

app.use(express.json())

app.use("/api", router)

const PORT = 5000

app.listen(PORT, () => console.log("app rodando em: http://localhost:" + PORT))