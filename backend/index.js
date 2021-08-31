require('dotenv').config();
const express = require('express');
const debug = require('debug')('synergy');
const morgan = require('morgan');
const chalk = require('chalk');

require('./src/configDDBB/configDDBB');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));

const userRouter = require('./src/routes/userRouter');

server.use('/synergy/users', userRouter);

const techniqueRouter = require('./src/routes/techniqueRouter');

server.use('/synergy/technique', techniqueRouter);

const reviewRouter = require('./src/routes/reviewRoutes');

server.use('/synergy/review', reviewRouter);

const resourceRouter = require('./src/routes/resourceRouter');

server.use('/synergy/resource', resourceRouter);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
