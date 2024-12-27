// 1
const user = {
  mood: "happy",
  hobby: "backetball",
  premium: "true",
};
user.hobby = "skydiving";
user.premium = "false";
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
const {mood, hobby, premium} = user
console.log(mood, hobby, premium)

// 2
function countProps(obj) {
  return Object.keys(obj).length;
}
console.log(countProps(user));

// 3
const workers = {
  danya: 28,
  stas: 20,
  andrew: 15,
  kiril: 27,
  ostap: 20,
  ivan: 25,
};

function findBestEmployee(employees) {
  let max = 0;
  let bestWorker;

  for (const key in employees) {
    if (employees[key] > max) {
      max = employees[key];
      bestWorker = key;
    }
    console.log(`${key}: ${workers[key]}`);
  }
  return `${bestWorker}: ${max}`;
}
console.log(findBestEmployee(workers));
const {danya, stas, andrew, kiril, ostap, ivan} = workers
console.log(danya, stas, andrew, kiril, ostap, ivan)

// 4
const salary = {
  Danya: 15600,
  Stas: 20000,
  Andrew: 17500,
  Kiril: 19000,
  Ostap: 25000,
  Ivan: 24500,
};

function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const key in employees) {
    totalSalary += employees[key];
    console.log(`${key}: ${salary[key]}`);
  }
  return totalSalary;
}
console.log(countTotalSalary(salary));
const {Danya, Stas, Andrew, Kiril, Ostap, Ivan} = salary
console.log(Danya, Stas, Andrew, Kiril, Ostap, Ivan)

// 5
const friends = [
  { name: "Mango", hobby: "programming" },
  { name: "Kiwi", hobby: "football" },
  { name: "Poly", hobby: "basketball" },
  { name: "Ajax", hobby: "swimming" },
];

function getAllPropValues(arr, prop) {
  let names = [];
  for (const key of arr) {
    names.push(key[prop]);
  }
  return names;
}
console.log(getAllPropValues(friends, "name"));

// 6
const vegetables = [
  { name: "Tomato", price: 150, value: 10 },
  { name: "Cucumber", price: 135, value: 15 },
  { name: "Pepper", price: 200, value: 12 },
];

function calculateTotalPrice(allProdcuts, productName) {
  for (const vegetables of allProdcuts) {
    if (vegetables.name == productName) {
      console.log(`${productName} коштують ${vegetables.price * vegetables.value}`);
    }
  }
}
calculateTotalPrice(vegetables, "Tomato");
calculateTotalPrice(vegetables, "Cucumber");
calculateTotalPrice(vegetables, "Pepper");
