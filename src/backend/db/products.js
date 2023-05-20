import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/91WgL3IbNIL._SL1500_.jpg",
    categoryName: "Laptop",
    price: 79999,
    originalPrice: 89999,
    productName: "Dell XPS 15",
    productDescription:
      "The Dell XPS 15 is a powerful laptop with a stunning display and exceptional performance.",
    inStock: true,
    averageRating: 4.8,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/71G7uuFWR-L._SL1500_.jpg",
    categoryName: "Laptop",
    price: 64999,
    originalPrice: 69999,
    productName: "HP Spectre x360",
    productDescription:
      "The HP Spectre x360 is a versatile 2-in-1 laptop with a sleek design and long battery life.",
    inStock: true,
    averageRating: 4.6,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/71k3N4gxNeL._SX450_.jpg",
    categoryName: "Laptop",
    price: 52999,
    originalPrice: 59999,
    productName: "Lenovo ThinkPad X1 Carbon",
    productDescription:
      "The Lenovo ThinkPad X1 Carbon is a lightweight and durable laptop with a great keyboard.",
    inStock: true,
    averageRating: 3.4,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/819sH4bXkGL._SX450_.jpg",
    categoryName: "Laptop",
    price: 71999,
    originalPrice: 79999,
    productName: "ASUS ROG Zephyrus G14",
    productDescription:
      "The ASUS ROG Zephyrus G14 is a high-performance gaming laptop with a compact form factor.",
    inStock: true,
    averageRating: 3.9,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UF1000,1000_QL80_.jpg",
    categoryName: "Laptop",
    price: 99999,
    originalPrice: 109999,
    productName: "Apple MacBook Pro",
    productDescription:
      "The Apple MacBook Pro is a premium laptop with a beautiful Retina display and fast performance.",
    inStock: true,
    averageRating: 4.9,
  },
  {
    _id: uuid(),
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/61IJBsHm97L._AC_UL600_SR600,600_.jpg",
    categoryName: "Smartphone",
    price: 69999,
    originalPrice: 74999,
    productName: "iPhone 13 Pro",
    productDescription:
      "The iPhone 13 Pro features a stunning Super Retina XDR display and a powerful A15 Bionic chip.",
    inStock: true,
    averageRating: 4.9,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg",
    categoryName: "Smartphone",
    price: 54999,
    originalPrice: 59999,
    productName: "Google Pixel 6 Pro",
    productDescription:
      "The Google Pixel 6 Pro offers a superb camera system and a clean Android experience.",
    inStock: true,
    averageRating: 4.7,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/81EkB+rbZkL._SX522_.jpg",
    categoryName: "Smartphone",
    price: 47999,
    originalPrice: 52999,
    productName: "Samsung Galaxy S21 Ultra",
    productDescription:
      "The Samsung Galaxy S21 Ultra is a flagship smartphone with a versatile camera setup and a large AMOLED display.",
    inStock: true,
    averageRating: 4.8,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/614cCf6bzyL._SX679_.jpg",
    categoryName: "Smartphone",
    price: 39999,
    originalPrice: 44999,
    productName: "OnePlus 9 Pro",
    productDescription:
      "The OnePlus 9 Pro offers a smooth and fast user experience with its high-refresh-rate display and powerful performance.",
    inStock: true,
    averageRating: 2.5,
  },
  {
    _id: uuid(),
    imgSrc: "https://m.media-amazon.com/images/I/51OBzQgvqDL.jpg",
    categoryName: "Smartphone",
    price: 32999,
    originalPrice: 37999,
    productName: "Xiaomi Mi 11 Ultra",
    productDescription:
      "The Xiaomi Mi 11 Ultra boasts a powerful camera system and a large OLED display.",
    inStock: true,
    averageRating: 2.8,
  },
  {
    _id: uuid(),
    imgSrc:"https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SS450_.jpg",
    categoryName: "Computer Accessory",
    price: 999,
    originalPrice: 1299,
    productName: "Logitech MX Master 3 Mouse",
    productDescription:
      "The Logitech MX Master 3 is an ergonomic wireless mouse with customizable buttons and precise tracking.",
    inStock: true,
    averageRating: 1.5,
  },
  {
    _id: uuid(),
    imgSrc:"https://m.media-amazon.com/images/I/616AvEx3S0S._SL1369_.jpg",
    categoryName: "Computer Accessory",
    price: 2499,
    originalPrice: 2999,
    productName: "Razer BlackWidow Elite Mechanical Keyboard",
    productDescription:
      "The Razer BlackWidow Elite is a mechanical gaming keyboard with customizable Chroma RGB lighting.",
    inStock: true,
    averageRating: 4.5,
  },
  {
    _id: uuid(),
    imgSrc:"https://m.media-amazon.com/images/I/31naAKlnBZL._AC_.jpg",
    categoryName: "Computer Accessory",
    price: 1999,
    originalPrice: 2299,
    productName: "Samsung 970 EVO Plus SSD",
    productDescription:
      "The Samsung 970 EVO Plus is a high-performance NVMe SSD with fast read and write speeds.",
    inStock: true,
    averageRating: 3.5,
  },
  {
    _id: uuid(),
    imgSrc:"https://m.media-amazon.com/images/I/71+ZD+DmiyL._SL1500_.jpg",
    categoryName: "Computer Accessory",
    price: 3699,
    originalPrice: 4899,
    productName: "JBL Quantum 200 Gaming Headset",
    productDescription:
      "The JBL Quantum 200 is a comfortable gaming headset with immersive sound and a detachable microphone.",
    inStock: true,
    averageRating: 2.5,
  },
  {
    _id: uuid(),
    imgSrc:"https://m.media-amazon.com/images/I/81vrHBdJyDL._SL1500_.jpg",
    categoryName: "Computer Accessory",
    price: 5999,
    originalPrice: 7799,
    productName: "Seagate Backup Plus 5TB External Hard Drive",
    productDescription:
      "The Seagate Backup Plus is a reliable external hard drive with ample storage capacity for your files and backups.",
    inStock: true,
    averageRating: 4.6,
  },
];
