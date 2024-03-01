import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createComment, getPostComments, likeComment, editComment} from '../controllers/comment.controller.js'
const router = express.Router()

router.post('/create',verifyToken, createComment)
router.get('/getPostComments/:postId', getPostComments)
router.put('/likecomment/:commentId', verifyToken, likeComment)
router.put('/editcomment/:commentId', verifyToken, editComment)
export default router