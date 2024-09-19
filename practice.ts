// type User = {
//   firstName: string;
//   age: number;
//   isNice: boolean;
//   role: string;
//   skills: string[];
//   friends?: string[];
// };

// const user: User = {
//   firstName: "John",
//   age: 30,
//   isNice: true,
//   role: "admin",
//   skills: ["React", "Angular", "Vue"],
// };

// console.log(user);

// enum Category {
//   shampoo = "Shampoo",
//   conditioner = "Conditioner",
//   cleanser = "Cleanser",
//   hairOil = "Hair Oil",
//   hairSpray = "Hair Spray",
// }
// type HairProduct = {
//   name: string;
//   price: number;
//   images: string[];
//   status: string;
//   category: Category;
// };

// const product = {
//   name: "Shampoo",
//   price: 2.99,
//   images: ["image-1.png", "image-2.png"],
//   status: "published",
//   category: Category.shampoo,
// };

// enum Status {
//   PUBLISHED = "published",
//   DRAFT = "draft",
// }

// const newProduct = {
//   name: "Shampoo",
//   price: 2.99,
//   images: ["image-1.png", "image-2.png"],
//   status: Status.PUBLISHED,
//   category: Category.shampoo,
// } as HairProduct;

// console.log(typeof newProduct);

// // Function
// function sellProduct(product: HairProduct, quantity: number, isPaid: boolean) {}

// const buyAnotherProduct = ({
//   product,
//   quantity,
//   seller,
// }: {
//   product: HairProduct;
//   quantity: number;
//   seller: string;
// }) => {};

// const addNewHairProduct = ({ name, price, status }: HairProduct) => {};

// const buyProduct = (product: HairProduct, quantity: number, seller: string) => {
//   return "";
// };
// type CatName = "miffy" | "boris" | "mordred";

// interface CatInfo {
//   age: number;
//   breed: string;
// }

// const cats: Record<CatName, CatInfo> = {
//   miffy: { age: 10, breed: "Persian" },
//   boris: { age: 5, breed: "Maine Coon" },
//   mordred: { age: 16, breed: "British Shorthair" },
// };

// console.log(cats.boris);

interface Page {
  title: string;
}

interface Page {
  width: number;
  height: number;
}

const newPage: Page = {
  title: "Hello",
  width: 100,
  height: 200,
};
console.log(newPage);
