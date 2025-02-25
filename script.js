

// // // Split metodi
// Split metodi matinni berilgan ajratuvchi bilan ajratadi hamda uni massivga aylantiradi
Array.prototype.split2 = function (el) {};

const r = (arg1, el) => {
  let a = [];
  let b = "";
  for (let i = 0; i < el.length; i++) {
    if (el[i] == arg1) {
      b && a.push(b);
      b = "";
    } else {
      b = b + el[i];
    }
  }
  b && a.push(b);
  return a;
};

console.log(r("l", "salom hello"));

// ForEach metodi
// ForEach metodi bu berilan arrayni bir marta to'liq aylanib chiqadi
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const num = [10, 20, 30, 40, 50];

num.myForEach((son) => {
  console.log("Element" + son);
});

// Map metodi
// Map metodi bu berilagn sharni bajarib yangi array hosil qiladi
Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i], i, this));
  }
  return res;
};
let arr1 = [10, 20, 30, 40, 50];

let arr2 = arr1.myMap((el) => {
  return el / 2;
});
console.log(arr2);

// filter metodi
// Flter metodi bu har bir element uchun berilagn shartni tekshiradi va shartni qanoatlantiradiganlarini yangi arrayga olib o'tadi
Array.prototype.myFilter = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let arr3=[10,20,30,40,50];

let arr4=arr3.myFilter((value)=>{
  return value %2==0;
})
console.log(arr4);
