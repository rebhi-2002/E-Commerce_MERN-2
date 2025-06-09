import express from "express";
import { getAllProducts } from "../services/productService";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).send(products);
});

export default router;

// GET: http://localhost:3001/product
// Result:
// [
//   {
//     "_id": "6846fc5ca325ce875b875d45",
//     "title": "Dell Laptop",
//     "image": "https://m.media-amazon.com/images/I/61+9ew81AfL._AC_UF1000,1000_QL80_.jpg",
//     "price": 15000,
//     "stock": 10,
//     "__v": 0
//   }
// ]
