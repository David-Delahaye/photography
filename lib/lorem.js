const words = [
  "ad",
  "adipisicing",
  "aliqua",
  "aliquip",
  "amet",
  "anim",
  "aute",
  "cillum",
  "commodo",
  "consectetur",
  "consequat",
  "culpa",
  "cupidatat",
  "mammamia",
  "do",
  "dolor",
  "dolore",
  "duis",
  "ea",
  "eiusmod",
  "elit",
  "enim",
  "esse",
  "est",
  "et",
  "eu",
  "ex",
  "excepteur",
  "exercitation",
  "fugiat",
  "id",
  "in",
  "incididunt",
  "ipsum",
  "irure",
  "labore",
  "beef",
  "laborum",
  "lorem",
  "magna",
  "minim",
  "mollit",
  "nisi",
  "non",
  "nostrud",
  "nulla",
  "occaecat",
  "officia",
  "pariatur",
  "proident",
  "qui",
  "quis",
  "reprehenderit",
  "sint",
  "sit",
  "sunt",
  "tempor",
  "ullamco",
  "ut",
  "velit",
  "veniam",
  "voluptate",
];

var Lorem = {
  output: "",
  wordLength: 0,
  paragraphs: 0,
  display(paras, words) {
    this.output = "";
    this.wordLength = words;
    this.paragraphs = paras;
    this.paraGen();
    return this.output;
  },
  paraGen() {
    for (let i = 0; i < this.paragraphs; i++) {
      this.wordGen();
      this.output += "\n";
    }
  },
  wordGen() {
    let word = "a";
    let wordCount = 0;
    let sentenceLength = Math.floor(Math.random() * 10 + 3);
    for (var i = 0; i < this.wordLength; i++) {
      //newWord selector
      var wordSelect = Math.floor(Math.random() * words.length);
      var newWord = words[wordSelect];
      //capitalize
      if (wordCount === 0) {
        var upperWord = newWord.charAt(0).toUpperCase() + newWord.substring(1);
        this.output += upperWord;
      } else {
        //newWord non repeat
        if (newWord === word) {
          if (wordSelect === words.length - 1) {
            newWord = words[0];
          } else {
            newWord = words[wordSelect + 1];
          }
        }
        word = newWord;
        this.output += word;
      }
      //sentence format
      wordCount++;
      if (wordCount >= sentenceLength) {
        this.output += ". ";
        sentenceLength = Math.floor(Math.random() * 10 + 3);
        wordCount = 0;
      } else if (i === this.wordLength - 1) {
        this.output += ".";
      } else {
        this.output += " ";
      }
    }
  },
};

export default Lorem;
