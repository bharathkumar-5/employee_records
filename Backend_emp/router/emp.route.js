import { Router } from "express";
import {
  createEmp,
  getEmp,
  getEmpById,
  deleteEmp,
  updateEmp,
} from "../controller/emp.control.js";
import { authentication, Authorization } from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";

const empRouter = Router();
empRouter.post("/create", authentication, Authorization, upload.single('profilePicture'), createEmp);
empRouter.get("/get", authentication, Authorization, getEmp);
empRouter.get("/getbyid", authentication, getEmpById);
empRouter.post("/update/:id", authentication, Authorization, upload.single('profilePicture'),  updateEmp);
empRouter.delete("/delete/:id", authentication, Authorization, deleteEmp);

export { empRouter };
