const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let MorseString = "";

  let MorseLetterLength = 0;

  for (let i = 0; i < expr.length - 1; i += 2) {
    let NumberLetter = expr.slice(i, i + 2);

    if (NumberLetter === "10") MorseString += ".";
    if (NumberLetter === "11") MorseString += "-";

    MorseLetterLength += 2;

    if (MorseLetterLength === 10) {
      MorseLetterLength = 0;
      MorseString += " ";
    }
  }

  const MorseStringSplit = MorseString.split(" ");
  let result = "";

  for (let i = 0; i < MorseStringSplit.length - 1; i++) {
    let decodeWord = MORSE_TABLE[MorseStringSplit[i]];

    if (decodeWord) result += decodeWord;
    else result += " ";
  }

  return result;
}

module.exports = {
  decode,
};
