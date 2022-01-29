"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const numberCollection = new NumbersCollection_1.NumbersCollection([100, 3, -5, 0]);
const sorte = new Sorter_1.Sorter(numberCollection);
sorte.sort();
console.log(numberCollection.data);
