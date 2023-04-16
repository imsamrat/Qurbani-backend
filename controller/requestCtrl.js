const Request = require("../models/requestModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createRequest = asyncHandler(async (req, res) => {
  try {
    const newRequest = await Request.create(req.body);
    res.json(newRequest);
    console.log(newRequest);
  } catch (error) {
    throw new Error(error);
  }
});
const updateRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedRequest = await Request.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedRequest);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedRequest = await Request.findByIdAndDelete(id);
    res.json(deletedRequest);
  } catch (error) {
    throw new Error(error);
  }
});
const getRequest = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaRequest = await Request.findById(id);
    res.json(getaRequest);
  } catch (error) {
    throw new Error(error);
  }
});
const getallRequest = asyncHandler(async (req, res) => {
  try {
    const getallRequest = await Request.find();
    res.json(getallRequest);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createRequest,
  updateRequest,
  deleteRequest,
  getRequest,
  getallRequest,
};
