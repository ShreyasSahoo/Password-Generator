const passwordLengthRange = document.getElementById("password-length-range");
const passwordLengthNumber = document.getElementById("password-length-number");
const form = document.getElementById("password-generator-form");
const includeNumbersElement = document.getElementById("include-numbers");
const includeUppercaseElement = document.getElementById("include-uppercase");
const includeSymbolsElement = document.getElementById("include-symbols");
const passwordDisplay = document.getElementById("password-display");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const passwordLength = passwordLengthNumber.value;
  const includeNumbers = includeNumbersElement.checked;
  const includeUppercase = includeUppercaseElement.checked;
  const includeSymbols = includeSymbolsElement.checked;
  const password = generatePassword(
    passwordLength,
    includeNumbers,
    includeSymbols,
    includeUppercase
  );
  passwordDisplay.innerText = password;
});
const LOWERCASE_CHAR_CODES = range(97, 122);
const UPPERCASE_CHAR_CODES = range(65, 90);
const NUMBER_CHAR_CODES = range(48, 57);
const SYMBOL_CHAR_CODES = range(33, 47)
  .concat(range(58, 64))
  .concat(range(91, 97));
function generatePassword(
  passwordLength,
  includeNumbers,
  includeSymbols,
  includeUppercase
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  const passwordCharArray = [];
  for (let i = 0; i < passwordLength; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharArray.push(String.fromCharCode(characterCode));
  }
  return passwordCharArray.join("");
}
passwordLengthNumber.addEventListener("input", syncPasswordLength);
passwordLengthRange.addEventListener("input", syncPasswordLength);
function range(low, high) {
  const arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return arr;
}
function syncPasswordLength(e) {
  const value = e.target.value;
  passwordLengthNumber.value = value;
  passwordLengthRange.value = value;
}
