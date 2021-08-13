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
let errorNaN1 = _("errorNaN1");
let errorNaN2 = _("errorNaN2");

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

    if (isNaN(parseFloat(numGetInputField))) {
      errorNaN1.style.color = "red";
      errorNaN1.innerText = `Please insert a number`;
    } else {
      let result = numGetInputField * numEurosBuy;
      calBuy.innerText = `${result} Naira`;
      errorNaN1.innerText = "";
    }
  }
  if (selectedCurrency === "Pounds") {
    let numGetInputField = parseInt(getInputField);
    let numPoundsBuy = parseInt(poundsBuyValue);

    if (isNaN(parseFloat(numGetInputField))) {
      errorNaN1.style.color = "red";
      errorNaN1.innerText = `Please insert a number`;
    } else {
      let result = numGetInputField * numPoundsBuy;
      calBuy.innerText = `${result} Naira`;
      errorNaN1.innerText = "";
    }
  }
  if (selectedCurrency === "Dollars") {
    let numGetInputField = parseInt(getInputField);
    let numDollarsBuy = parseInt(dollarBuyValue);

    if (isNaN(parseFloat(numGetInputField))) {
      errorNaN1.style.color = "red";
      errorNaN1.innerText = `Please insert a number`;
    } else {
      let result = numGetInputField * numDollarsBuy;
      calBuy.innerText = `${result} Naira`;
      errorNaN1.innerText = "";
    }
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
    if (isNaN(parseFloat(numGetInputField))) {
      errorNaN2.style.color = "red";
      errorNaN2.innerText = `Please insert a number`;
    } else {
      let result = numGetInputField * numEurosSell;
      calSel.innerText = `${result} Naira`;
      errorNaN2.innerText = "";
    }
  }

  if (selectedCurrency === "Pounds") {
    let numGetInputField = parseInt(getInputField);
    let numPoundsSell = parseInt(poundsSellValue);
    if (isNaN(parseFloat(numGetInputField))) {
      errorNaN2.style.color = "red";
      errorNaN2.innerText = `Please insert a number`;
    } else {
      let result = numGetInputField * numPoundsSell;
      calSel.innerText = `${result} Naira`;
      errorNaN2.innerText = "";
    }
  }

  if (selectedCurrency === "Dollars") {
    let numGetInputField = parseInt(getInputField);
    let numDollarsSell = parseInt(dollarSellValue);

    if (isNaN(parseFloat(numGetInputField))) {
      errorNaN2.style.color = "red";
      errorNaN2.innerText = `Please insert a number`;
    } else {
      let result = numGetInputField * numDollarsSell;
      calSel.innerText = `${result} Naira`;
      errorNaN2.innerText = "";
    }
  }
};

//T fuhnction reset the form field
const resetForm = () => {
  formBuy.reset();
  formSell.reset();
  calSel.innerText = "";
  calBuy.innerText = "";
  errorNaN1.innerText = "";
  errorNaN2.innerText = "";
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
