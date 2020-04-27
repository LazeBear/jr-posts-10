const express = require("express");
require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// /api/v1/posts/xxx

app.use("/v1", routes);
// app.use('/v2', newRoutes);

app.listen(PORT, () => {
  console.log(`sever listening on port ${PORT}`);
});
