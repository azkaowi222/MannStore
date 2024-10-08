import express from "express";
import {
  deleteData,
  getData,
  Login,
  Register,
  updateData,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.post("/token", verifyToken);
router.patch("/update/:id", updateData);
router.get("/getdata", getData);
router.delete("/deletedata/:id", deleteData);

export default router;
