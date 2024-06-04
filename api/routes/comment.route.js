import express from 'express'
import { verifyToken } from '../utils/verifyUser.js'
import { createComment, getPostComments, likeComment, editComment, deleteComment, getcomments} from '../controllers/comment.controller.js'
const router = express.Router()

router.post('/create', createComment)
router.get('/getPostComments/:postId', getPostComments)
router.put('/likecomment/:commentId', likeComment)
router.put('/editcomment/:commentId', editComment)
router.delete('/deletecomment/:commentId', deleteComment)
router.get('/getcomments', getcomments);
export default router