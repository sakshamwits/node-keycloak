import express from "express"
import IntroductionController from "../controllers/introduction.controller"
import FrequencyController from "../controllers/frequency.controller"

const router = express.Router()

router.get('/introduction', IntroductionController.getUser)
router.get('/introduction/:name', IntroductionController.getUser)
router.post('/frequency', FrequencyController.frequency)
router.post('/frequency/:parameter', FrequencyController.frequency)

export default router