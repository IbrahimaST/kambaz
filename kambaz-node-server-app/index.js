import express from 'express'
import Hello from "./Hello.js"
import registerLab5Routes from "./lab5.routes";

const app = express()
registerLab5Routes(app);
Hello(app)
app.listen(4000)

