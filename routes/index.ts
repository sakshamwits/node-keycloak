import express from "express"
import UserController from "../controllers/user"

const router = express.Router()

router.get('/:name', UserController.getUser)

export default router