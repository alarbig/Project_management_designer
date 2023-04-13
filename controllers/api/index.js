const router = require('express').Router();
const { User, Admin } = require('../../models');
const userRoutes = require('./userRoutes');


router.use('users', userRoutes);

module.exports = router;

