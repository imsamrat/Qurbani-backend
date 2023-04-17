const express = require("express");
const {
  createProduct,
  getAMember,
  getAllMember,
  updateMember,
  deleteProduct,
  addToWishlist,
  rating,
} = require("../controller/memberCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/:id", getAMember);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateMember);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllMember);

module.exports = router;
