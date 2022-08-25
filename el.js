const building = document.querySelector(".building");
for (let n = 20; n >= 1; n--) {
  const floor = document.createElement("div");
  floor.setAttribute("class", "floor floor-" + n);
  building.appendChild(floor);
  floor.innerText = n;
}
const elevator = document.querySelector(".elevator");
for (let n = 20; n > 1; n--) {
  const Elevator = document.createElement("div");
  Elevator.setAttribute("class", "elevator-floor  elevator-floor-" + n);
  elevator.appendChild(Elevator);
}

const firstfloor = document.createElement("div");
firstfloor.setAttribute(
  "class",
  "elevator-floor elevator-active  elevator-floor-" + 1
);
elevator.appendChild(firstfloor);
const firstFloor = document.querySelector(".elevator-floor-1");
const secondFloor = document.querySelector(".elevator-floor-2");
const thirdFloor = document.querySelector(".elevator-floor-3");
const fourthFloor = document.querySelector(".elevator-floor-4");
const fifthFloor = document.querySelector(".elevator-floor-5");
const sixFloor = document.querySelector(".elevator-floor-6");
const sevenFloor = document.querySelector(".elevator-floor-7");
const eightFloor = document.querySelector(".elevator-floor-8");
const nineFloor = document.querySelector(".elevator-floor-9");
const tenFloor = document.querySelector(".elevator-floor-10");
const elevenFloor = document.querySelector(".elevator-floor-11");
const twelveFloor = document.querySelector(".elevator-floor-12");
const thirteenFloor = document.querySelector(".elevator-floor-13");
const fourteenFloor = document.querySelector(".elevator-floor-14");
const fifteenFloor = document.querySelector(".elevator-floor-15");
const sixteenFloor = document.querySelector(".elevator-floor-16");
const seventeenFloor = document.querySelector(".elevator-floor-17");
const eighteenFloor = document.querySelector(".elevator-floor-18");
const nineteenFloor = document.querySelector(".elevator-floor-19");
const twentyFloor = document.querySelector(".elevator-floor-20");
const allFloors = document.querySelectorAll(".elevator-floor");
const floors = [
  firstFloor,
  secondFloor,
  thirdFloor,
  fourthFloor,
  fifthFloor,
  sixFloor,
  sevenFloor,
  eightFloor,
  nineFloor,
  tenFloor,
  elevenFloor,
  twelveFloor,
  thirteenFloor,
  fourteenFloor,
  fifteenFloor,
  sixteenFloor,
  seventeenFloor,
  eighteenFloor,
  nineteenFloor,
  twentyFloor,
];

const activeFloor = floors.filter((e) =>
  e.classList.contains("elevator-active")
)[0];
function makeActive(floor) {
  allFloors.forEach((el) => el.classList.remove("elevator-active"));
  floor.target.classList.add("elevator-active");
}
floors.forEach((e) => e.addEventListener("click", makeActive));

const elevator2 = document.querySelector(".elevator2");
for (let n = 20; n > 1; n--) {
  const Elevator2 = document.createElement("div");
  Elevator2.setAttribute("class", "elevator-floor el elevator-floor-" + n);
  Elevator2.setAttribute("id", n);
  elevator2.appendChild(Elevator2);
}

const firstfloorTwo = document.createElement("div");
const elevator3 = document.querySelector(".elevator3");
for (let n = 20; n > 1; n--) {
  const Elevator3 = document.createElement("div");
  Elevator3.setAttribute("class", "elevator-floor l elevator-floor-" + n);
  Elevator3.setAttribute("id", "-" + n);
  elevator3.appendChild(Elevator3);
}

const firstfloorThree = document.createElement("div");

firstfloorTwo.setAttribute(
  "class",
  "elevator-floor elevator-active2 el elevator-floor-" + 1
);
firstfloorTwo.setAttribute("id", "first");
elevator2.appendChild(firstfloorTwo);
firstfloorThree.setAttribute(
  "class",
  "elevator-floor  elevator-active3 elevator-floor-" + 1
);
firstfloorThree.setAttribute("id", "last");
elevator3.appendChild(firstfloorThree);

const firstF = document.getElementById("first");
const secondF = document.getElementById("2");
const thirdF = document.getElementById("3");
const fourthF = document.getElementById("4");
const fifthF = document.getElementById("5");
const sixF = document.getElementById("6");
const sevenF = document.getElementById("7");
const eightF = document.getElementById("8");
const nineF = document.getElementById("9");
const tenF = document.getElementById("10");
const elevenF = document.getElementById("11");
const twelveF = document.getElementById("12");
const thirteenF = document.getElementById("13");
const fourteenF = document.getElementById("14");
const fifteenF = document.getElementById("15");
const sixteenF = document.getElementById("16");
const seventeenF = document.getElementById("17");
const eighteenF = document.getElementById("18");
const nineteenF = document.getElementById("19");
const twentyF = document.getElementById("20");
const allFloors3 = document.querySelectorAll(".el");
const floors2 = [
  firstF,
  secondF,
  thirdF,
  fourthF,
  fifthF,
  sixF,
  sevenF,
  eightF,
  nineF,
  tenF,
  elevenF,
  twelveF,
  thirteenF,
  fourteenF,
  fifteenF,
  sixteenF,
  seventeenF,
  eighteenF,
  nineteenF,
  twentyF,
];
const floor1 = document.querySelector(".floor-2");
const activeFloor2 = floors.filter((e) =>
  e.classList.contains("elevator-active2")
)[0];
function makeActive2(floor) {
  allFloors3.forEach((el) => el.classList.remove("elevator-active2"));
  floor.target.classList.add("elevator-active2");
}
floors2.forEach((e) => e.addEventListener("click", makeActive2));

const first = document.getElementById("last");
const second = document.getElementById("-2");
const third = document.getElementById("-3");
const fourth = document.getElementById("-4");
const fifth = document.getElementById("-5");
const six = document.getElementById("-6");
const seven = document.getElementById("-7");
const eight = document.getElementById("-8");
const nine = document.getElementById("-9");
const ten = document.getElementById("-10");
const eleven = document.getElementById("-11");
const twelve = document.getElementById("-12");
const thirteen = document.getElementById("-13");
const fourteen = document.getElementById("-14");
const fifteen = document.getElementById("-15");
const sixteen = document.getElementById("-16");
const seventeen = document.getElementById("-17");
const eighteen = document.getElementById("-18");
const nineteen = document.getElementById("-19");
const twenty = document.getElementById("-20");
const allF = document.querySelectorAll(".l");
const floors3 = [
  first,
  second,
  third,
  fourth,
  fifth,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
];

const activeFloor3 = floors.filter((e) =>
  e.classList.contains("elevator-active3")
)[0];
function makeActive3(floor) {
  allF.forEach((el) => el.classList.remove("elevator-active3"));

  floor.target.classList.add("elevator-active3");
}
floors3.forEach((e) => e.addEventListener("click", makeActive3));
