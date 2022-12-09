import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/images');
app.get('/', (Request: any, Response: any) => {
    Response.json({ image_processer: 'external API' });
  });

app.use(function (err: any, req: any, res: any, next: any) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  });
  
  const PORT = process.env.PORT || 8000;
  app.listen(PORT);
  console.log(`http://localhost:${PORT}`);

  
