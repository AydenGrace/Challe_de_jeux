const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  console.log("\x1b[36m%s\x1b[0m", `http://localhost:${PORT}/api/`);
});
