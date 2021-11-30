const sentence = "hello there from lighthouse labs\n";
const printing = (sentence) => {
if (sentence.length > 1) {
  setTimeout(() => {
    process.stdout.write(sentence[0])
    printing(sentence.slice(1))
  }, 50);
} else {
  setTimeout(() => {
    process.stdout.write(sentence[0]);  
  }, 500);
  }
}
printing(sentence);