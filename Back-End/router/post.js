import express from 'express';

import { singleUpload } from '../middleware/multer.js';
import { isAuthenticated } from '../middleware/auth.js';
import { PostUpload } from '../controllers/post.js';
import { addlike,removelike,checklikes, countLikes } from '../controller/likecontroller.js/likecontroller.js';

const router = express.Router()

router.post("/postupload",isAuthenticated,singleUpload,PostUpload);
router.post("/liked",addlike)
router.post("/disliked",removelike)
router.post("/getlikes",checklikes)
router.post('/countlikes',countLikes)

export default router