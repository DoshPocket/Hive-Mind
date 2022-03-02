const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoute = require('./homeRoute');

router.use('/users', userRoutes);
router.use('/??', homeRoute);

module.exports = router;
