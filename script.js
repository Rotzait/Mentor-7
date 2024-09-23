const btns = document.getElementsByClassName("num");
const submit = document.getElementById("env");
const selecNum = document.getElementById("selec-num");
const firstSide = document.getElementById("rat-side");
const thxSide = document.getElementById("thx-side");
let selected

Array.from(btns).forEach( rate => {
    rate.addEventListener("click", ()=> {
        Array.from(btns).forEach (btn => {
            btn.className = "num";
        })
        rate.className = "num selected";
        selected = rate.id;
    } )
})

submit.addEventListener("click", () => {
    if (selected === undefined) {
        alarm("Por favor, seleccione una puntuación")
        return
    } else {
    selecNum.innerText = selected;
    firstSide.className = "non";
    thxSide.className = "";
    }
})