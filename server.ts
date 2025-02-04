import express, { Request, Response } from "express"

const app = express()
const port: number = 3000

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})