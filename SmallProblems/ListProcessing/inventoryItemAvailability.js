let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemID, transactions) {
  return transactions.filter((element) => element["id"] === itemID);
}

function isItemAvailable(itemID, transactions) {
  let changes = transactionsFor(itemID, transactions);
  let stock = 0;
  changes.forEach((element) => {
    if (element["movement"] === "in") stock += element["quantity"];
    if (element["movement"] === "out") stock -= element["quantity"];
  });
  if (stock > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));