const express = require("express");
const { connectToDB } = require("./config/db");
const langRoutes = require("./routes/lang");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/language", langRoutes);

async function startServer() {
  await connectToDB();
  app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
  });
}

startServer();