const router = require('express').Router();
const userRoutes = require('./userRoutes');
const orgRoute = require('./orgRoute');
const projectRoute = require('./projectRoute');
const homeRoute = require('./homeRoute');


router.use('/users', userRoutes);
router.use('/organizations', orgRoute);
router.use('/projects', projectRoute);
router.use('/home', homeRoute);


module.exports = router;

