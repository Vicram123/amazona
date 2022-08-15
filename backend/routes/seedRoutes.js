import express from "express";
import Product from "../models/ProductModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  //send product to frontend
  res.send({ createdProducts });
});

export default seedRouter;
