import InventoryItem from "../models/InventoryItem";

const inventory: InventoryItem[] = [
  { product: { name: "motor", price: 10.0 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  { product: { name: "LED", price: 1.0 }, quantity: 20 },
];

const calcInventoryValue = (array: InventoryItem[]): number => {
  if (array.length) {
    return array.reduce((pv, cv) => {
      return pv + cv.product.price * cv.quantity;
    }, 0);
  } else {
    return 0;
  }
};

let result: number = calcInventoryValue(inventory);
console.log(result);
