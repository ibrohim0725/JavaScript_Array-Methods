// Capitalize metodi
let srt = "salom  dunyo";
String.prototype.myCapitalize = function () {
  let res = "";
  let capitalize = true;
  for (let el of this) {
    if (capitalize && el != " ") {
      res += el.toUpperCase();
      capitalize = false;
    } else {
      res += el;
    }
    if (el === " ") {
      capitalize = true;
    }
  }
  console.log(res);
};
srt.myCapitalize(() => {});
// // // Split metodi
// Split metodi matinni berilgan ajratuvchi bilan ajratadi hamda uni massivga aylantiradi
const str1 = "hello";
String.prototype.mySplit = function () {
  console.log(this);
};
str1.mySplit(() => {});

// Sort metodi
Array.prototype.mySort = function () {
  let n = this.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this;
};
let arr5 = [15, 68, 95, 26, 3, 15, 478];
console.log(arr5.mySort());

// // ForEach metodi
// // ForEach metodi bu berilan arrayni bir marta to'liq aylanib chiqadi
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const num = [10, 20, 30, 40, 50];

num.myForEach((son) => {
  console.log("Element" + " " + son);
});

// Map metodi
// Map metodi bu berilagn shartni bajarib yangi array hosil qiladi
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

let arr3 = [10, 20, 30, 40, 50];

let arr4 = arr3.myFilter((value) => {
  return value % 2 == 0;
});
console.log(arr4);

// Join metodi
Array.prototype.myJoin = function (callback) {
  let arrStrjoin = "";
  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      arrStrjoin += this[i];
    } else {
      arrStrjoin += this[i] + callback;
    }
  }
  return arrStrjoin;
};
let arr = [10, 20, 30, 40, 50];
console.log(arr.myJoin(" "));

// PadEnd metodi
String.prototype.myPadEnd = function (callback, padstring = "") {
  if (this.length >= callback) {
    return this.toString();
  }
  let res = this.toString();
  while (res.length < callback) {
    res += padstring;
  }

  return res;
};
let strpadend = "Salom";
console.log(strpadend.myPadEnd(20, "*"));

// padStart metodi
String.prototype.myPadsatrt = function (callback, padstring = "") {
  if (this.length >= callback) {
    return this.toString();
  }
  let res = this.toString();
  while (res.length < callback) {
    res = padstring + res;
  }
  return res;
};
let strPadstrat = "Salom";
console.log(strPadstrat.myPadsatrt(10, "*"));

// Includes metodi
String.prototype.myIncludes = function (searchstr, position = 0) {
  if (position < 0) {
    position = 0;
  }
  let searchlength = searchstr.length;

  if (searchlength === 0) {
    return true;
  }

  for (let i = position; i <= this.length - searchlength; i++) {
    if (this.slice(i, i + searchlength) === searchstr) {
      return true;
    }
  }

  return false;
};

let str3 = "Salom";
console.log(str3.myIncludes("d"));

// Length
String.prototype.myLength = function () {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    counter++;
  }
  console.log(counter);
};
let str2 = "Hello ";
str2.myLength();
