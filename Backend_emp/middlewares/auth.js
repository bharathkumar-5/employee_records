import { emp } from "../models/employee.model.js";
import jwt from "jsonwebtoken";

export const authentication=async(req,res,next)=>{
    // console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1] || req.headers.authorization;
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.details = decoded;
        next();
    } catch (e) {
        res.status(401).json({ message: "Invalid Token", error:e.message});
    }
}
export const Authorization=(req,res,next)=>{
    try {
       const details=req.details
        if (details.role !== "admin") {
            return res.status(403).json({ message: "Only admins can do this." });
        }
        next();
    } catch (e) {
        res.status(500).json({ message: "Internal server error", error:e.message });
    }
}