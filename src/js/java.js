/***********************
 ** KFZ Steuerberechnung **
 ***********************/

let areaP3 = document.getElementById('areaP3');
let areaP1 = document.getElementById('areaP1');
let areaV7 = document.getElementById('areaV7');
let areaF2 = document.getElementById('areaF2');
let diesel = document.getElementById("diesel");
let ottomotor = document.getElementById("ottomotor");
let elektro = document.getElementById("elektro");
let tax = document.getElementById("tax");

areaF2.disabled = true;
areaF2.disabled = true; areaF2.value = "0";
/** disable/delete the other inputfield **/

elektro.addEventListener("click",() => {
    areaP1.disabled = true; areaP1.value = "0";
    areaV7.disabled = true; areaV7.value = "0";
    areaF2.disabled = false; areaF2.value = "";
});
ottomotor.addEventListener("click", () => {
    areaF2.disabled = true; areaF2.value = "0";
    areaP1.disabled = false; areaP1.value = "";
    areaV7.disabled = false; areaV7.value = "";

});
diesel.addEventListener("click", () => {
    areaF2.disabled = true; areaF2.value = "0";
    areaP1.disabled = false; areaP1.value = "";
    areaV7.disabled = false; areaV7.value = "";
});
function showTax(taxNumber){tax.innerText = taxNumber + " Euro";}
function calcTax(){
let hubraum = areaP1.value;
let emission = areaV7.value;
let gewicht = areaF2.value;
    if(diesel.checked == true){
        if(emission <= 95){ emission = 95;}
        let steuer = ((Math.ceil((hubraum/100)))*9.5)+((emission-95)*2);
        showTax(parseInt(steuer));
    } else if(ottomotor.checked == true){
        if(emission <= 95){emission = 95;}
        let steuer = ((Math.ceil((hubraum/100)))*2)+((emission-95)*2);
        showTax(parseInt(steuer));
    } else {
        if(gewicht <= 2000){
            let steuer = Math.floor(((Math.ceil(gewicht/200))*5.625));
            showTax(parseInt(steuer));
        }else if(gewicht >= 2001 && gewicht <= 3000){
            let weightParse1 = 10*5.652;
            let steuer = gewicht - 2000;
            steuer = Math.floor((((Math.ceil(steuer/200))*6.01) + weightParse1)); // 3
            showTax(parseInt(steuer));
        }else if(gewicht >= 3001 && gewicht <= 3500){
            let weightParse1 = 10*5.652;
            let weightParse2 = 10*6.01;
            let steuer = gewicht - 3000;
            steuer = Math.floor((((Math.ceil(steuer/200))*6.39) + weightParse1 + weightParse2)); // 3
            showTax(parseInt(steuer));
        }
    }
}


