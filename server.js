require("dotenv").config();

const cors = require("cors");
const express = require("express");

const routes1 = require('./routes/test.js');
const routes2 = require('./routes/menuItems.js');
const keycloak = require("./middlewares/keycloak.js")

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(keycloak.middleware());

app.get("/", function (req, res) {
  res.send("Welcome");
});

app.use('/api', routes1);
app.use('/api', routes2);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
