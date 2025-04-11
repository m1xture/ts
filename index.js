"use strict";
//? task 1
//* #1
let age = 50;
let username = "Max";
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => {
    return 100 + a;
};
//* #2
let anything = -20;
anything = "Text";
anything = {};
//* 3
let some;
some = "Text";
let str;
str = some;
//* 4
let person = ["Max", 21];
//* 5
var State;
(function (State) {
    State[State["ISLOADING"] = 0] = "ISLOADING";
    State[State["READY"] = 1] = "READY";
})(State || (State = {}));
const page = {
    currentState: State.ISLOADING,
};
let i = 0;
setTimeout(() => {
    page.currentState = State.READY;
    i++;
}, 2000);
const intervalId = setInterval(() => {
    console.log("State - ", page.currentState);
    if (i !== 0)
        clearInterval(intervalId);
}, 5000);
//* 6
let numOrStr = "String currently";
numOrStr = 21;
const switcher = "disabled";
//* 8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date("2021-01-01"),
        updateAt: new Date("2021-05-01"),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
