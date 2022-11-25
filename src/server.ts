import dotenv from "dotenv";
import express from 'express';

dotenv.config()

const app = express();

app.get('/', (req, res)=> {
  return res.json({
    "message": "Welcome"
  })
})

app.listen(3000, () => console.log(`\u{1F680} server is running on ${process.env.BASE_URL}`))