import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numberCollection = new NumbersCollection([100,3,-5,0]);
const sorte = new Sorter(numberCollection);
sorte.sort();
console.log(numberCollection.data);