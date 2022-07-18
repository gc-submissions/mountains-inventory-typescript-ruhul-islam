import Product from "../models/Product";

const products: Product[] = [
  { name: "IPhone", price: 1000 },
  { name: "Samsung", price: 800 },
  { name: "Huawei", price: 600 },
  { name: "Walton", price: 400 },
];

export const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length) {
    return (
      array.reduce((pv, cv) => {
        return pv + cv.price;
      }, 0) / array.length
    );
  } else {
    return 0;
  }
};
let result: number = calcAverageProductPrice(products);
console.log(result);
