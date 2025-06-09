import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Dell Laptop",
      image:
        "https://m.media-amazon.com/images/I/61+9ew81AfL._AC_UF1000,1000_QL80_.jpg",
      price: 15000,
      stock: 10,
    },
    // {title: "Product 1", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 10, stock: 100 },
    // {title: "Product 2", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 20, stock: 80 },
    // {title: "Product 3", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 15, stock: 50 },
    // {title: "Product 4", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 25, stock: 70 },
    // {title: "Product 5", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 5, stock: 90 },
    // {title: "Product 6", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 30, stock: 60 },
    // {title: "Product 7", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 35, stock: 40 },
    // {title: "Product 8", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 40, stock: 30 },
    // {title: "Product 9", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 45, stock: 20 },
    // {title: "Product 10", image: "https://placehold.co/150/0B1D51/FFE3A9?font=playfair-display&text=Playfair%20Display", price: 50, stock: 10 },
  ];

  const existingProducts = await getAllProducts();

  if (existingProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
