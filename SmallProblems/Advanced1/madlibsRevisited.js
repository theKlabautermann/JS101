let template1 = {
  adjectives: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  adverbs: ["easily", "lazily", "noisily", "excitedly"],
  nouns: ["fox", "dog", "head", "leg", "tail", "cat"],
  verbs: ["jumps", "lifts", "bites", "licks", "pats"],
  sentence: "The [adjectives] brown [nouns] [adverbs] [verbs] the [adjectives] yellow [nouns], who [adverbs] [verbs] his [nouns] and looks around."
};

let template2 = {
  adjectives: ["quick", "lazy", "sleepy", "noisy", "hungry"],
  adverbs: ["easily", "lazily", "noisily", "excitedly"],
  nouns: ["fox", "dog", "head", "leg", "tail", "cat"],
  verbs: ["jumps", "lifts", "bites", "licks", "pats"],
  sentence: "The [nouns] [verbs] the [nouns]'s [nouns]."
};

function getWord(template, wordType) {
  return template[`${wordType}`][Math.floor(Math.random() * template[`${wordType}`].length)];
}

function madlibs(template) {
  let sentenceArr = template["sentence"].split(" ");
  for (let index = 0; index < sentenceArr.length; index++) {
    if (sentenceArr[index].match(/\[adjectives\]/)) {
      sentenceArr[index] = sentenceArr[index].replace(/\[adjectives\]/, getWord(template, "adjectives"));
    } else if (sentenceArr[index].match(/\[adverbs\]/)) {
      sentenceArr[index] = sentenceArr[index].replace(/\[adverbs\]/, getWord(template, "adverbs"));
    } else if (sentenceArr[index].match(/\[nouns\]/)) {
      sentenceArr[index] = sentenceArr[index].replace(/\[nouns\]/, getWord(template, "nouns"));
    } else if (sentenceArr[index].match(/\[verbs\]/)) {
      sentenceArr[index] = sentenceArr[index].replace(/\[verbs\]/, getWord(template, "verbs"));
    }
  }
  return sentenceArr.join(" ");
}

console.log(madlibs(template1));

console.log(madlibs(template2));
