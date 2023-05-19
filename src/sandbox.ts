// Commented code is invalid typescript

type stringOrNum = number | string;

const logDetails = (uid: stringOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

type objWithName = { name: string; uid: stringOrNum };

const greet = (user: objWithName) => {
  console.log(`${user.name} has the uid of ${user.uid}`);
  console.log(`hello, ${user.name}`);
};
