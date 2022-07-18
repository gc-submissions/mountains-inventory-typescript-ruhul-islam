import Mountain from "../models/Mountain";

const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 },
];

export const findNameOfTallestMountain = (array: Mountain[]): string => {
  if (array.length) {
    let lowestArray: Mountain = array.reduce((pv, cv) => {
      return pv.height > cv.height ? pv : cv;
    });
    return lowestArray.name;
  } else {
    return "";
  }
};
let result: string = findNameOfTallestMountain(mountains);
console.log(result);
