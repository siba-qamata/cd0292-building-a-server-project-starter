import express from 'express';

import {
    imageProcessorController
} from './controllers/image-processor-controller';


const router = express.Router()
router.post('/create', imageProcessorController)


export default router;