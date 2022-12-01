import express from "express";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

//Middleware
app.use(cors())
app.use(express.json())

//rutes
app.get("/",(request, response)=>{
   return response.send("msj")
})

app.post("/test",(request, response)=>{
   console.log(request.body)
   return response.send("save test")
})

//escuchar
app.listen(port, ()=>{
   console.log("Server run in: " + port)
})
