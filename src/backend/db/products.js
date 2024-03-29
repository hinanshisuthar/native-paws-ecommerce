import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Dear Pet Super Saver Multi-Variety Dog Treat Pack",
    tag: "bestseller",
    price: 399,
    rating: 5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/saverpack_lyheya.jpg',
    size: 'small',
    tagColor: 'green',
    categoryName: "food",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Pet Me Luxury Stylish Rope Leash",
    tag: "choice",
    price: 299,
    rating: 4,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647678600/home/4908_hbfhkr.jpg',
    size: 'small',
    tagColor: 'purple',
    categoryName: "leash",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Himalaya Healthy Treats - Adults",
    tag: "new",
    price: 409,
    rating: 4.5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/p1_dc20lv.webp',
    size: 'medium',
    tagColor: 'blue',
    categoryName: "food",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "RAW dog treats - Chiken Jerky Flavour",
    tag: "choice",
    price: 199,
    rating: 5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501409/home/cards_vwbxkl.png',
    size: 'large',
    tagColor: 'purple',
    categoryName: "food",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "UC Evolution BoBo Box Dog Toys | Set of 9 |",
    tag: "choice",
    price: 499,
    rating: 4.7,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501569/home/61-CO5dRZiL._SY450__oblydr.jpg',
    size: 'medium',
    tagColor: 'purple',
    categoryName: "toys",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Chicken Jerky - Pack Of 2",
    tag: "new",
    price: 399,
    rating: 3.5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/2_2170515b-aeae-426e-91cc-7fac9dc78ba9_cikjrq.webp',
    size: 'small',
    tagColor: 'blue',
    categoryName: "food",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Chew Toys for Dogs and Cats - Pack of 3",
    tag: "bestseller",
    price: 179,
    rating: 1.5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/3-combo-of-3-durable-pet-teeth-cleaning-chewing-biting-knotted-original-imag93t9yyxvrygu_qkaekf.webp',
    size: 'large',
    tagColor: 'green',
    categoryName: "toys",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Kong Sports Ball - Dog Toy",
    tag: "choice",
    price: 99,
    rating: 5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501409/home/1604737208kongsportsballjpg_bxo7bk.webp',
    size: 'medium',
    tagColor: 'purple',
    categoryName: "toys",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Red Printed Sweatshirt",
    tag: "bestseller",
    price: 449,
    rating: 4.5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/img_4671_awlaj4.jpg',
    size: 'medium',
    tagColor: 'green',
    categoryName: "clothes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Super Dog Rubber Hole Ball Toy (Large)",
    tag: "bestseller",
    price: 59,
    rating: 4.5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501622/home/61zQd302BSL._SY450__hqgwsd.jpg',
    size: 'large',
    tagColor: 'green',
    categoryName: "toys",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Beboji Argyle Read Sweater For Dogs",
    tag: "new",
    price: 199,
    rating: 4.3,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/img_4568_uoibmt.jpg',
    size: 'small',
    tagColor: 'blue',
    categoryName: "clothes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Navy Sweatshirt with Hoodie",
    tag: "new",
    price: 149,
    rating: 4.9,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/img_4680_dykvam.jpg',
    size: 'large',
    tagColor: 'blue',
    categoryName: "clothes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "PetWale Dog Leash with Padded Handle",
    tag: "new",
    price: 249,
    rating: 2,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501813/home/71FSW9K5ZTL._SX569__hmulxt.jpg',
    size: 'small',
    tagColor: 'blue',
    categoryName: "leash",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "FETCHER Blue & Black Premium Dog T-Shirts (Set of 2)",
    tag: "choice",
    price: 299,
    rating: 5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501679/home/61bSqyBA5_L._SY450__duw9vx.jpg',
    size: 'small',
    tagColor: 'purple',
    categoryName: "clothes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Dear Pet Dry Dog Food",
    tag: "new",
    price: 319,
    rating: 3,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501529/home/download_jd9ier.jpg',
    size: 'medium',
    tagColor: 'blue',
    categoryName: "food",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Treat Dispenser Toy for dogs and cats",
    tag: "bestseller",
    price: 99,
    rating: 3.5,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501409/home/32020_labib4.jpg',
    size: 'small',
    tagColor: 'green',
    categoryName: "toys",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Dear Pet Blooming Yellow Dog Harness",
    tag: "bestseller",
    price: 299,
    rating: 4.7,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/cards1_zi4fie.png',
    size: 'medium',
    tagColor: 'green',
    categoryName: "leash",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Dear Pet Blooming Yellow Dog Leash",
    tag: "new",
    price: 279,
    rating: 3,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501410/home/floral-combo_wclxym.webp',
    size: 'large',
    tagColor: 'blue',
    categoryName: "leash",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Lana Paws Adjustable Tuxedo Dog Bandana/Scarf",
    tag: "bestseller",
    price: 399,
    rating: 4,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501811/home/A1iXBU7wrWL._AC_UL320__mlzn5i.jpg',
    size: 'large',
    tagColor: 'green',
    categoryName: "clothes",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
  {
    _id: uuid(),
    title: "Retractable Dog Leash, 26 Foot",
    tag: "choice",
    price: 499,
    rating: 4,
    img: 'https://res.cloudinary.com/do5ez3xws/image/upload/v1647501812/home/614XeyHUIRL._SY450__xnjby4.jpg',
    size: 'large',
    tagColor: 'purple',
    categoryName: "leash",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptates possimus aperiam, facere nobis distinctio perspiciatis obcaecati",
  },
];
