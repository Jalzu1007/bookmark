const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const historyRoutes = require('./historyRoutes');

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
router.use('/history', historyRoutes);

module.exports = router;
