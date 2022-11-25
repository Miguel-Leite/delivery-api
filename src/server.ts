import dotenv from "dotenv";
import express from 'express';
import { routes } from "./routes";

dotenv.config()

const app = express();

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => console.log(`\u{1F680} server is running on ${process.env.BASE_URL}:${process.env.PORT}/`))