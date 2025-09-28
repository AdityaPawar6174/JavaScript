// .checked = property that determines the checked 
// state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const submitResult = document.getElementById("submitResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        submitResult.textContent = `you are suhscribed!`;
    }
    else{
        submitResult.textContent = `you are not subscribed!`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `you are paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = `you are paying with masterCard`;
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = `you are paying with payPal`;
    }
    else{
        paymentResult.textContent = `check you payment method first..`;
    }
}