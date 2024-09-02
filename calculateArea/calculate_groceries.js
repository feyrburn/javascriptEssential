function calculateAmount(){
    let price1 = parseFloat(document.getElementById("price1").value);
    let price2 = parseFloat(document.getElementById("price2").value);
    let price3 = parseFloat(document.getElementById("price3").value);

    let total = price1 + price2 + price3;
    document.getElementById("result").innerText = `The total amount is : ${total}`;
}
