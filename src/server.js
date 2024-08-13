import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import hotelRouter from './routers/HotelRouters.js';
dotenv.config();

const app = express();
const PORT = process.env.API_PORT;

app.use(cors());
app.use(express.json());


// Use o router
app.use('/hotel', hotelRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
