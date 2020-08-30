import express from 'express';
import welcomeRoute from './welcome.routes';
import userRoutes from './user.routes';

const app = express.Router();

app.use(welcomeRoute);
app.use('/api', userRoutes);
export default app;
