const input = document.querySelector("#text-input");
const form = document.querySelector("form");
const resultContainer = document.querySelector("#result-container");
const rawTextSpan = document.querySelector(".raw-text");
const textResultSpan = document.querySelector(".text-result");

const isAllSpace = (val) => {
  const spaceRegex = /^[\s]*$/;
  const result = spaceRegex.test(val);
  return result;
}

const toDesired = (str) => {
  const rawStr = str;
  const regex = /[a-z0-9]/ig;
  const desiredArray = rawStr.match(regex);
  const desiredStr = desiredArray.join("").toLowerCase();
  return desiredStr;
}

const reverseStr = (text) => {
  let reversedStr = "";
  for (let i=(text.length-1); i>=0; i--) {
    reversedStr += text[i];
  }
  return reversedStr;
}

const isPalindrome = (txt) => {
  let desiredStr = toDesired(txt);
  if (reverseStr(desiredStr) === desiredStr) {
    return true;
  } else {
    return false;
  }
}

const getResultSpanText = (tex) => {
  let resultText;
  if (isPalindrome(tex)) {
    resultText = " is a palindrome";
  } else {
    resultText = " is not a palindrome";
  }
  return resultText;
}

const resultDisplay = (e) => {
  e.preventDefault();

  const rawStr = input.value;
  if (!isAllSpace(rawStr) && rawStr!=="") { 
    const textResult = getResultSpanText(rawStr);
    rawTextSpan.innerText = rawStr;
    textResultSpan.innerText = textResult;
    resultContainer.classList.remove("hide");
    input.value = "";
    input.focus();
  } else {
    resultContainer.class = "hide";
    alert("Please input a value");
  }
}

form.addEventListener("submit", resultDisplay);