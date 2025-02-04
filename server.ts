import express from "express"
import routes from "./routes"

const app = express()
const port: number = 3000

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Welcome')
})

app.use("/api", routes)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})