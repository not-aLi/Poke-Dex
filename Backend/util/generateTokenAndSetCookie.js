import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie =(user_id,res)=>{
 const token = jwt.sign({user_id},process.env.JWT_SECRET,{
    expiresIn: "7D"
 })
 res.cookie("token",token,{
    httpOnly : true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    maxAge: 7*24*60*60*1000,
 })
 return token;
}
