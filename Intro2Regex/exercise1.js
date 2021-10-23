function isUrl(str) {
  return !!str.match(/^https?:\/\/\S+$/);
}

console.log(isUrl("http://launchschool.com"));
console.log(isUrl("https://example.com"));
console.log(isUrl("https://example.com hello"));
console.log(isUrl("    https://example.com"));