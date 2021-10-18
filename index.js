require('dotenv').config();
const express = require('express');
const debug = require('debug')('synergy');
const morgan = require('morgan');
const passport = require('passport');
const cors = require('cors');
const chalk = require('chalk');
const history = require('connect-history-api-fallback');
const serveStatic = require('serve-static');
const path = require('path');

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

server.use('/api/auth/', authRoutes);

server.use('/api/users', passport.authenticate('jwt', { session: false }), userProtectedRoutes);

server.use('/api/technique', passport.authenticate('jwt', { session: false }), techniqueProtectedRoutes);

server.use('/api/review', passport.authenticate('jwt', { session: false }), reviewProtectedRoutes);

server.use('/api/resource', passport.authenticate('jwt', { session: false }), resourceProtectedRoutes);

server.use(history());
server.use('/', serveStatic(path.join(__dirname, '/frontend/dist')));

server.listen(
  port,
  () => debug(`Server is running on ${chalk.blue(`http://localhost:${port}`)}`)
);
