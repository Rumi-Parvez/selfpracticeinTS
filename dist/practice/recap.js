"use strict";
// variabel 
Object.defineProperty(exports, "__esModule", { value: true });
let Name = "Rumi Parvez";
let RollNo = 1034;
let isSSCPassed = true;
let Collage = "";
let SuperPower = null;
// Array 
let ClassRoll = [4, 2, 26, 5, 6, 7, 8, 9, 12];
let StudentsName = ["rumi", "shumi", 'bomi'];
let isPassedSSC = [true, false, true];
// Union
// (string | number | null | boolean | unknown  | undefined)
// Array + Union 
let StudentDetasil = ['rumi', true, 56754];
// Objects 
let CEO = {
    Name: "Rumi pavrez",
    Age: 17,
    Mobile: 8801407794143,
    Email: "xyz@admin.com",
    isMarridge: false,
};
let EM1 = {
    Name: "Rumi pavrez",
    Age: 17,
    Mobile: 8801407794143,
    Email: "xyz@admin.com",
    isMarridge: false,
};
let EM2 = {
    Name: "Hasina",
    Age: 56,
    Mobile: 8801407794143,
    isMarridge: false,
};
let EM3 = {
    Name: "khaleda",
    Age: 6541,
    Mobile: 8801407794143,
    Email: "xyz@admin.com",
};
// console.log(EM1);
// console.log(EM2);
// console.log(EM3);
// Function 
const add = (number1, number2) => {
    let AddNumber = number1 + number1;
    if (AddNumber > number1 && AddNumber > number2) {
        return "it's larjest Number";
    }
    return ` ${number1} `;
};
// console.log(add(45,0));
let user = {
    Name: "Rumi pavrez",
    Age: 17,
    Mobile: 8801407794143,
    Email: "xyz@admin.com",
    isMarridge: false,
    roll: 'Admin',
};
var rolls;
(function (rolls) {
    rolls[rolls["Admin"] = 0] = "Admin";
    rolls[rolls["Modarator"] = 1] = "Modarator";
    rolls[rolls["Guste"] = 2] = "Guste";
})(rolls || (rolls = {}));
//# sourceMappingURL=recap.js.map