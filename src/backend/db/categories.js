import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "food",
    categoryImg: "https://res.cloudinary.com/do5ez3xws/image/upload/v1647500586/home/food_uwkbjc.jpg"
  },
  {
    _id: uuid(),
    categoryName: "leash",
    categoryImg: "https://res.cloudinary.com/do5ez3xws/image/upload/v1647500589/home/leash_juk9vv.svg"
  },
  {
    _id: uuid(),
    categoryName: "toys",
    categoryImg: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647500588/home/toys_l4zmsj.svg'
  },
  {
    _id: uuid(),
    categoryName: "clothes",
    categoryImg: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647500590/home/cloth_ttnk0r.svg'
  },
];
