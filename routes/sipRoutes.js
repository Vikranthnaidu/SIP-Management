const express = require('express');

const { createSip,getSipById,processSip,getSipTransactions } = require('../controller/sipController');

const router = express.Router();

router.post('/createSip', createSip);
router.get('/:sipId', getSipById);
router.post('/:sipId/process', processSip);
router.get('/:sipId/transactions', getSipTransactions);

module.exports = router;