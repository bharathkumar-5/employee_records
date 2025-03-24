import {Router} from "express";
 import { loginUser } from "../controller/auth.control.js";

 const authrouter=Router();

 authrouter.post("/login",loginUser);
 export {authrouter}