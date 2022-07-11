const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
let map1 = itemsObject.map((x) => {
  let doubleObj = Object.assign({}, x);
  doubleObj.quantity *= 2;
  doubleObj.price *= 2;
  return doubleObj;
});
console.log("map1:", map1);
let map2 = itemsObject.filter((x) => x.quantity > 2 && x.price > 300);
console.log("map2:", map2);
let map3 = itemsObject.reduce((total, cur) => {
  total = cur.price * cur.quantity + total;
  return total;
}, 0);
console.log("map3:", map3);
const string =
  " Perhaps The                Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";
let q2 = string.replace(/\s\s+/g, " ").toLowerCase();
console.log(q2);
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
const third = first
  .concat(second)
  .reduce(
    (acc, cur) => [
      ...acc,
      {
        uuid: cur.uuid,
        name: cur.name || null,
        role: cur.role || null,
      },
    ],
    []
  )
  .sort((a, b) => (a.uuid > b.uuid ? 1 : -1));
console.log(third);
