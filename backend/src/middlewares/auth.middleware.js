import jwt from "jsonwebtoken"


const isAuth = async(req,res,next)=>{
    try {
        let token = req.cookies
        if (!token) {
            return 
            res.status(400).json(
            {message:"User doesn't have token"})
        }
        const verifyToken = JsonWebTokenError
    } catch (error) {
        
    }

}