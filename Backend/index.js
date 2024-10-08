import express from "express";
import session from "express-session";
import cors from "cors";
import router from "./routes/route.js";
import { sequelize } from "./config/database.js";

const app = express();

try {
  await sequelize.authenticate();
  console.log("Database Connect");
} catch (err) {
  console.error(err);
}

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "dvheudvbuebyybfv",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(router);

app.listen(3005, () => console.log("Running at http://localhost:3005"));
