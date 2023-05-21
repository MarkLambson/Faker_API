const express = require("express");

const app = express();
const port = process.env.ATLAS_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Routes = require("./routes/faker.route");
Routes(app);

app.listen(port, () => console.log(`Sir, we've made contact! Brodcasting feed to: ${port}`));