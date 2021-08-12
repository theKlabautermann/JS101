function art(sentence) {
  let output;
  for (let i = 0; i < 10; i += 1) {
    output = sentence.padStart((sentence.length + i));
    console.log(output);
  }
}

art("The Flintstones Rock!");