"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const CharactersCollection_1 = require("./CharactersCollection");
/* const numberCollection = new NumbersCollection([100,3,-5,0]);
const sorte = new Sorter(numberCollection);
sorte.sort();
console.log(numberCollection.data); */
const charactersCollection = new CharactersCollection_1.CharactersCollection('XaayB');
const sorter = new Sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
