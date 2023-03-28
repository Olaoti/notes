var copies = document.querySelectorAll(".copy");
var input = document.querySelectorAll("input.heading");
var textareas = document.querySelectorAll("textarea");
var alertText = document.querySelector(".copied-alert");
var texthead;
var textbody;
var cliptext = "";
copies.forEach((copy) => {
  copy.addEventListener("click", function () {
    input.forEach((inp) => {
      if (inp.classList.contains(copy.id)) {
        texthead = inp.value;
      }
    });
    textareas.forEach((textarea) => {
      if (textarea.classList.contains(copy.id)) {
        textbody = textarea.value;
      }
    });
    cliptext = `${textbody}`;
    navigator.clipboard.writeText(cliptext);
    console.log(cliptext);
    var div = document.createElement("div");
    div.innerHTML = "Text copied!";
    alertText.appendChild(div);
    setTimeout(() => {
      div.style.opacity = 0;
    }, 1100);
    setTimeout(() => {
      div.style.display = "none";
    }, 1400);
    return (cliptext = "");
  });
});
var allInputs = document.querySelectorAll("input");
allInputs.forEach((loinp) => {
  loinp.addEventListener("keyup", function () {
    localStorage.setItem(loinp.name, JSON.stringify(loinp.value));
  });
  var localData = localStorage.getItem(loinp.name);
  loinp.value = localData ? JSON.parse(localData) : "";
});
textareas.forEach((text) => {
  text.addEventListener("keyup", function () {
    localStorage.setItem(text.name, JSON.stringify(text.value));
  });
  var localData = localStorage.getItem(text.name);
  text.value = localData ? JSON.parse(localData) : "";
});
var copycolumn = document.querySelectorAll(".copycolumn");
var cards = document.querySelectorAll(".cards");
copycolumn.forEach((col) => {
  col.addEventListener("click", function () {
    cards.forEach((card) => {
      if (card.classList.contains(col.id)) {
        var columnhead = document.querySelector(`.column${col.id}head`);
        // var inputs = card.querySelectorAll('input')
        //var inputsarr = Array.from(inputs)
        var texts = card.querySelectorAll("textarea");
        var textsarr = Array.from(texts);
        /* cliptext = `${inputs[0].value} \n ${textsarr[0].value} \n
                ${inputs[1].value} \n${textsarr[1].value} \n
                ${inputs[2].value} \n${textsarr[2].value} \n
                ${inputs[3].value} \n${textsarr[3].value} \n
                ${inputs[4].value} \n${textsarr[4].value} \n
                ${inputs[5].value} \n${textsarr[5].value} \n
                ${inputs[6].value} \n${textsarr[6].value} \n
                ${inputs[7].value} \n${textsarr[7].value} \n
                ${inputs[8].value} \n${textsarr[8].value} \n
                ${inputs[9].value} \n${textsarr[9].value} \n
                ${inputs[10].value} \n${textsarr[10].value} \n
                ${inputs[11].value} \n${textsarr[11].value} \n
                ${inputs[12].value} \n${textsarr[12].value} \n
                ${inputs[13].value} \n${textsarr[13].value} \n
                ${inputs[14].value} \n${textsarr[14].value} \n
                ${inputs[15].value} \n${textsarr[15].value} \n
                ${inputs[16].value} \n${textsarr[16].value} \n
                ${inputs[17].value} \n${textsarr[17].value} \n
                ${inputs[18].value} \n${textsarr[18].value} \n
                ${inputs[19].value} \n${textsarr[19].value} `*/
        //var valuedint = inputsarr.filter((int)=>{return int.value.length>=2 && int.value!=undefined})
        var valuedtexts = textsarr.filter((text) => {
          return text.value.length >= 1;
        });
        for (i = 0; i < valuedtexts.length; i++) {
          cliptext += `${
            columnhead.value ? columnhead.value : "Column name"
          }\n\n\n${valuedtexts[i]?.value}\n\n\n`;
        }
        navigator.clipboard.writeText(cliptext);
        var div = document.createElement("div");
        div.innerHTML = "Column copied!";
        alertText.appendChild(div);
        setTimeout(() => {
          div.style.opacity = 0;
        }, 1100);
        setTimeout(() => {
          div.style.display = "none";
        }, 1400);
      }
    });
    return (cliptext = "");
  });
});
