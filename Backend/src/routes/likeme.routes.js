import { Router } from "express";
import {  addPostLikeme, deletePostLikeme, getPostLikeme, updatePostLikeme } from "../controllers/likeme.controllers.js";

const router = Router();

//Routes
router.get("/", getPostLikeme);
router.post("/", addPostLikeme);
router.delete("/:id", deletePostLikeme);
router.put("/:id", updatePostLikeme);

export default router