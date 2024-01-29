import express from "express";
import {
    addRemoveFriend,
    getUser,
    getUserFriends,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);
router.patch("/:id/friendID", verifyToken, addRemoveFriend);

export default router;