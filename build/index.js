"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const sorte = new Sorter_1.Sorter([10, 3, -5, 0]);
sorte.sort();
console.log(sorte.collection);
