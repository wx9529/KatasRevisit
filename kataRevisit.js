//Kata 8 Repeating Numbers
const repeatNumbers = (data) => {
  let res = "";
  data.forEach((subData, index) => {
    const times = subData[1];
    for (let i = 0; i < times; i++) {
      res += subData[0];
    }
    if (index !== data.length - 1) {
      res += ", ";
    }
  });
  return res;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

// 1111111111
// 11, 222
// 10101010, 343434343434, 9292

// Kata 15
const organizeInstructors = (instructors) => {
  let res = {};
  instructors.forEach((item) => {
    const course = item.course;
    const name = item.name;
    if (course in res) {
      res[course].push(name);
    } else {
      res[course] = [name];
    }
  });
  return res;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);

// expected
// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

//Kata 1

const sumLargestNumbers = (data) => {
  const maxOne = data.reduce((prev, curr) => {
    if (curr > prev) {
      return curr;
    } else {
      return prev;
    }
  }, 0);

  const maxTwo = data.reduce((prev, curr) => {
    if (curr > prev && curr !== maxOne) {
      return curr;
    } else {
      return prev;
    }
  }, 0);

  return maxOne + maxTwo;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Expected
// 11
// 5
// 126

// Kata2

const conditionalSum = (values, condition) => {
  if (!values.length) return 0;
  let res = [];
  if (condition === "even") {
    res = values.filter((e) => e % 2 === 0);
  } else {
    res = values.filter((e) => e % 2 !== 0);
  }
  let output = 0;
  res.forEach((e) => (output += e));
  return output;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

//Expected
// 6
// 9
// 144
// 0

//Kata3

const numberOfVowels = (data) => {
  const tableVolwels = ["a", "e", "i", "o", "u"];
  let res = 0;
  for (const char of data) {
    tableVolwels.forEach((e) => {
      if (char === e) {
        res += 1;
      }
    });
  }
  return res;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

//Expected
// 3
// 5
// 5

// Kata4

const instructorWithLongestName = (instructors) => {
  let max = 0;
  let maxKey = "";
  instructors.forEach((e) => {
    const length = e.name.length;
    if (length > max) {
      max = e.name.length;
      maxKey = e.name;
    }
  });
  for (let item of instructors) {
    if (item.name === maxKey) {
      return item;
    }
  }
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);

//Expected
// {name: "Jeremiah", course: "Web"}
// {name: "Domascus", course: "Web"}

//Kata 7
const checkAir = (samples, threshold) => {
  let dirtyNum = 0;
  samples.forEach((e) => {
    if (e === "dirty") {
      dirtyNum += 1;
    }
  });
  if (dirtyNum / samples.length < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
