const express = require('express')
const app = express();
const port = process.env.PORT || 3000
require("./database")
app.use(express.json())
require("./view/receitasRouter")(app)
require("./view/ingredientesRouter")(app)
require("./view/loginRouter")(app)
app.listen(port)
