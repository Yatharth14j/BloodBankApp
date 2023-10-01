const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("not a donar account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("not a hospital");
    }

    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "new blood record added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in inventory API",
      error,
    });
  }
};

module.exports = { createInventoryController };
