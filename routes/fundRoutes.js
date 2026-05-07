const express = require("express");
const {createFund, getAllFunds, updateNAV,} = require("../controller/fundController.js");

const router = express.Router();

router.post("/createFund", createFund);
router.get("/getFunds", getAllFunds);
router.put("/:fundId/nav", updateNAV);

module.exports = router;