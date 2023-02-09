import express from "express";
import { userSchema } from "../mongoDB/modals/user.js";
const router = express.Router();

router.route("/").post(async (req, res) => {
  const { todo } = req.body;
  try {
    const user = await userSchema.create({
      todo,
    });
    res.json(user);
  } catch (err) {
    console.log(err);
  }
});

export default router;
