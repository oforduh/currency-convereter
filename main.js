function _(x) {
  return document.getElementById(x);
}

let euroBuy = _("euroBuy");
let euroSell = _("euroSell");
let poundsBuy = _("poundsBuy");
let poundsSell = _("poundsSell");
let dollarBuy = _("dollarBuy");
let dollarSell = _("dollarSell");
let formBuy = _("formBuy");
let formSell = _("formSell");

let euroBuyValue = (euroBuy.innerText = 600);
let euroSellValue = (euroSell.innerText = 605);
let poundsBuyValue = (poundsBuy.innerText = 700);
let poundsSellValue = (poundsSell.innerText = 705);
let dollarBuyValue = (dollarBuy.innerText = 500);
let dollarSellValue = (dollarSell.innerText = 505);

const calFormBuy = () => {
  let buyCurrency = _("buyCurrency");
  let formBuyInput = _("formBuyInput");
  let selectedCurrency = buyCurrency.value;
  let getInputField = formBuyInput.value;
  let calBuy = _("calBuy");

  if (selectedCurrency === "Euros") {
    let numGetInputField = parseInt(getInputField);
    let numEurosBuy = parseInt(euroBuyValue);
    let result = numGetInputField * numEurosBuy;
    return (calBuy.innerText = `${result} Naira`);
  }
  if (selectedCurrency === "Pounds") {
    let numGetInputField = parseInt(getInputField);
    let numPoundsBuy = parseInt(poundsBuyValue);
    let result = numGetInputField * numPoundsBuy;
    return (calBuy.innerText = `${result} Naira`);
  }
  if (selectedCurrency === "Dollars") {
    let numGetInputField = parseInt(getInputField);
    let numDollarsBuy = parseInt(dollarBuyValue);
    let result = numGetInputField * numDollarsBuy;
    return (calBuy.innerText = `${result} Naira`);
  }
};

const calFormSell = () => {
  let sellCurrency = _("sellCurrency");
  let formSellput = _("formSellput");
  let selectedCurrency = sellCurrency.value;
  let getInputField = formSellput.value;
  let calSel = _("calSel");

  if (selectedCurrency === "Euros") {
    let numGetInputField = parseInt(getInputField);
    let numEurosSell = parseInt(euroSellValue);
    console.log(numGetInputField);
    console.log(numEurosSell);
    let result = numGetInputField * numEurosSell;
    console.log(result);
    return (calSel.innerText = `${result} Naira`);
  }
  if (selectedCurrency === "Pounds") {
    let numGetInputField = parseInt(getInputField);
    let numPoundsSell = parseInt(poundsSellValue);
    let result = numGetInputField * numPoundsSell;
    return (calSel.innerText = `${result} Naira`);
  }
  if (selectedCurrency === "Dollars") {
    let numGetInputField = parseInt(getInputField);
    let numDollarsSell = parseInt(dollarSellValue);
    let result = numGetInputField * numDollarsSell;
    return (calSel.innerText = `${result} Naira`);
  }
};

//T fuhnction reset the form field
const resetForm = () => {
  formBuy.reset();
  formSell.reset();
};

//functions to hide and show calculator
let formBuyToggle = _("formBuyToggle");
let formSellToggle = _("formSellToggle");
let buyBS1 = _("buyBS1");
let buyBS2 = _("buyBS2");

const showBuyCal = () => {
  formBuyToggle.classList.remove("hideCalculator");
  formSellToggle.classList.add("hideCalculator");
  buyBS2.style.backgroundColor = "grey";
  buyBS1.style.backgroundColor = "green";
};

const showSellCal = () => {
  formSellToggle.classList.remove("hideCalculator");
  formBuyToggle.classList.add("hideCalculator");
  buyBS1.style.backgroundColor = "grey";
  buyBS2.style.backgroundColor = "red";
};

showBuyCal();
