const button = document.getElementById("button");
const cena1 = document.getElementById("cena1");
const cena2 = document.getElementById("cena2");
const rozmiar1 = document.getElementById("rozmiar1");
const rozmiar2 = document.getElementById("rozmiar2");
const result = document.getElementById("result");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");



button.addEventListener("click", calculate );

function calculate (){

    let pole1 = (rozmiar1.value/2)*(rozmiar1.value/2)*Math.PI;
    let pole2 = (rozmiar2.value/2)*(rozmiar2.value/2)*Math.PI;

    let pizza1 = pole1/cena1.value;
    let pizza2 = pole2/cena2.value;

    if (pizza1 > 0 && pizza2 > 0){
        result.innerText = "Pizza 1: " + pizza1.toFixed(2) + " cm2/zł";
        result3.innerText = "Pizza 2: " + pizza2.toFixed(2) + " cm2/zł";
        
        if (pizza1 > pizza2){
            result2.innerText = "Pizza 1 jest bardziej opłacalna"
        }

        else if (pizza1 < pizza2){
            result2.innerText = "Pizza 2 jest bardziej opłacalna"
        }
        else {
            result2.innerText = "Pizze kosztują tyle samo"
        }

    }


}