function formatDate(str) {
  return str.replace(/^\d\d\d\d-\d\d-\d\d$/, str.split("-").reverse().join("."));
}

function formatDate2(str) {
  return str.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, "$3.$2.$1");
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

console.log(formatDate2('2016-06-17')); // -> '17.06.2016'
console.log(formatDate2('2016/06/17')); // -> '2016/06/17' (no change)