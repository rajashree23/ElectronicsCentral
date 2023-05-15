import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Laptop",
    description:
      "A portable computer that is designed for mobility and convenience.",
  },
  {
    _id: uuid(),
    categoryName: "Smartphone",
    description:
      "A mobile phone that offers advanced computing and connectivity capabilities.",
  },
  {
    _id: uuid(),
    categoryName: "Computer Accessory",
    description:
      "An add-on device or component that enhances the functionality of a computer.",
  },
];
