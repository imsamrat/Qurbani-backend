const express = require("express");
const {
  createRequest,
  updateRequest,
  deleteRequest,
  getRequest,
  getallRequest,
} = require("../controller/requestCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createRequest);
router.put("/:id", authMiddleware, isAdmin, updateRequest);
router.delete("/:id", authMiddleware, isAdmin, deleteRequest);
router.get("/:id", getRequest);
router.get("/", getallRequest);

module.exports = router;
