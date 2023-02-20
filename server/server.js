import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/MongoDB.js';
import videoRoute from './routes/videoRouter.js';

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

//API
//app.use('/api/import', ImportData);
app.use('/api/videos', videoRoute);

//ERROR HANDLER
//app.use(notFound);
//app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));