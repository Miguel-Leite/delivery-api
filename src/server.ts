import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors";

import { routes } from "./routes";

dotenv.config()

const app = express();

app.use(express.json())
app.use(routes)
app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    })
  }

  return response.status(500).json({
    message: "Internal Server Error"
  })
})

app.listen(process.env.PORT, () => console.log(`\u{1F680} server is running on ${process.env.BASE_URL}:${process.env.PORT}/`))