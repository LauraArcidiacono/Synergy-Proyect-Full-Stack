require('dotenv').config();
const express = require('express');
const debug = require('debug')('synergy');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const chalk = require('chalk');

require('dotenv').config();
require('./src/configDDBB/configDDBB');
require('./src/auth/auth');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

const authRoutes = require('./src/routes/authRouter');
const userProtectedRoutes = require('./src/routes/userRouter');
const techniqueProtectedRoutes = require('./src/routes/techniqueRouter');
const reviewProtectedRoutes = require('./src/routes/reviewRoutes');
const resourceProtectedRoutes = require('./src/routes/resourceRouter');

server.use('/synergy/auth/', authRoutes);

server.use('/synergy/users', passport.authenticate('jwt', { session: false }), userProtectedRoutes);

server.use('/synergy/technique', passport.authenticate('jwt', { session: false }), techniqueProtectedRoutes);

server.use('/synergy/review', passport.authenticate('jwt', { session: false }), reviewProtectedRoutes);

server.use('/synergy/resource', passport.authenticate('jwt', { session: false }), resourceProtectedRoutes);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
