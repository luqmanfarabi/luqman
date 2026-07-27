const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Dunia!</h1><p>Website pertama saya.</p>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
