function setAction(form) {
  let inputPrice = parseInt(document.getElementById("price").value);
  let inputTax = parseInt(document.getElementById("tax").value);

  let salesTax = inputTax / 100;

  let salesTaxTotal = inputPrice * salesTax;

  let result = inputPrice + salesTaxTotal;

  document.getElementById("result").value = result;
}
