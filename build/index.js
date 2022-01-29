"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const LinkedList_1 = require("./LinkedList");
/* const numberCollection = new NumbersCollection([100,3,-5,0]);
const sorte = new Sorter(numberCollection);
sorte.sort();
console.log(numberCollection.data); */
/* const charactersCollection = new CharactersCollection('XaayB');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data); */
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-4);
const sorter = new Sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
