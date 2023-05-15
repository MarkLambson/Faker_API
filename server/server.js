const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Routes = require("./routes/faker.route");
Routes(app);

app.listen(port, () => console.log(`Sir, we've made contact! Brodcasting feed to: ${port}`));