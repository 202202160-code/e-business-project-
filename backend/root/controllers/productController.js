const products = require("../models/productModel");

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ message: "Product added", product: newProduct });
};

exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};