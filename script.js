const BASE_URL="https:  //api.currencyfreaks.com/v2.0/rates/latest?apikey=6441d3fb5825496cbd2be5213de68528";
const dropdowns= document.querySelectorAll(".dropdown");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
for (let select of dropdowns){
    for(currcode in country){
        let newop=document.createElement("option");
        newop.innertext=currcode;
        newop.value=currcode;
        if(select.name==="from"&& currcode==="USD"){
            newop.selected="selected";
        }else if(select.name==="to"&& currcode==="PAK"){
            newop.selected="selected";
        }
        select.append(newop);
    }
    
}
btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtv = amount.value;

    const URL = `${BASE_URL}&from=${fromcurr.value}&to=${tocurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
});
