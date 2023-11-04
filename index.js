const express = require("express")
const connectDatabase = require("./src/database/db")

const userRoute = require("./src/routes/user.route")

const app = express();
const porta = 3000

connectDatabase()
app.use(express.json())
app.use("/user", userRoute)

app.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))