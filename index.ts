//? task 1

//* #1

let age: number = 50;
let username: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};
console.log(username, age);
//* #2

let anything: any = -20;
anything = "Text";
anything = {};

//* 3

let some: unknown;

some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

//* 4

let person: [string, number] = ["Max", 21];

//* 5

enum State {
  ISLOADING,
  READY,
}
const page = {
  currentState: State.ISLOADING,
};
let i: number = 0;

setTimeout(() => {
  page.currentState = State.READY;
  i++;
}, 2000);

const intervalId = setInterval(() => {
  console.log("State - ", page.currentState);
  if (i !== 0) clearInterval(intervalId);
}, 1000);

//* 6

let numOrStr: number | string = "String currently";
console.log("numOrStr", numOrStr);
numOrStr = 21;
console.log("numOrStr", numOrStr);

//* 7

type SwitcherVariants = "enabled" | "disabled";
const switcher: SwitcherVariants = "disabled";

//* 8

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Synthetic error (^^ゞ");
}

showMessage("Hello world! (with typescript)");
console.log(calc(5, 4));

try {
  customError();
} catch (err) {
  console.log(err);
}

//* 9

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: { createAt: Date; updateAt: Date };
}

const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

console.log("page1", page1);
console.log("page2", page2);
