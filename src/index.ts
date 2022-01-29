import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

/* const numberCollection = new NumbersCollection([100,3,-5,0]);
const sorte = new Sorter(numberCollection);
sorte.sort();
console.log(numberCollection.data); */

const charactersCollection = new CharactersCollection('XaayB');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);