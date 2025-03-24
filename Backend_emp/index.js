// import { configDotenv } from "dotenv";
// configDotenv();
// import express from "express"
// import cors from "cors";
// import {connect} from "mongoose";
// import { empRouter } from "./router/emp.route.js";

// const app=express();
// app.use(express.json())
// app.use(cors());

// app.use("/emp",empRouter)

// app.listen(process.env.PORT,async()=>{
//     try{
//         await connect(process.env.MONGO_URL)
//         console.log("db connected");
//         console.log("server started on port http://localhost:4444")
//     }catch(e){
//         console.log(e.message)
//     }
// })



import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors";
import {connect} from "mongoose";
import { empRouter } from "./router/emp.route.js";
import { authrouter } from "./router/auth.route.js";
import { emp } from "./models/employee.model.js";
import argon2 from "argon2";

const app=express();
app.use(express.json())
// app.use(cors());
app.use(cors());
app.use("/auth",authrouter)
app.use("/emp",empRouter)

async function createDefaultAdmin() {
    try {
        
        const employeeCount = await emp.countDocuments();

        if (employeeCount === 0) {
            
            const hashedPassword = await argon2.hash("admin1"); 

            await emp.create({
                name: "Admin",
                email: "admin@gmail.com",
                password: hashedPassword,
                role: "admin",
                phone: "1234567890",
                department: "Admin",
                salary: 0,
            });

            console.log("email:admin@gmail.com and password:admin1");
        } else {
            console.log("email:admin@gmail.com and password:admin1");
            console.log("Employees already exist. Skipping admin creation.");
        }
    } catch (error) {
        console.error("Error creating default admin:", error.message);
    }
}
createDefaultAdmin()

app.listen(process.env.PORT,async()=>{
    try{
        await connect(process.env.MONGO_URL)
        console.log("db connected");
        console.log("server started on port http://localhost:4444")
    }catch(e){
        console.log(e.message)
    }
});
