import jwt from 'jsonwebtoken'
import { errorHandler } from './error.js'
export const verifyToken = (req,res,next)=> {
    const token = req.cookies.access_token
    console.log('ok')
    if(!token){
        console.log("no token")
        return next(errorHandler(401, 'Unauthorized'))
    }
    jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
        if(err){
            console.log("invalid token")
            return next(errorHandler(401, 'Unauthorized'))
           
        }
        console.log("yay")
        req.user = user
        next()
    })
}