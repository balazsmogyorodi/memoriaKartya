//window.addEventListener("load", init);
const hatLap = "kepek/kartyahat.png";
const eloLapok = [
    "kepek/banjo-and-kazooie.png",
    "kepek/kirby.png",
    "kepek/link.png",
    "kepek/pac-man.png",
    "kepek/zero_suit_samus.png",
    "kepek/steve.png"
]
const pakli = [];
for (let i = 0; i < eloLapok.length; i++) {
    pakli.push(i);
    pakli.push(i);
}
let kivalasztot = [];
const memoriaKartyak = [];

$(window).ready(function () {
    const Element = $('#jatek');
   kiiras = kartyak();
    Element.append(kiiras);
    const kepek = $(".kep")
    kepek.on("click", forditas);


});




function kartyak() {  
    let kiiras = "";
    shuffleArray(pakli);
    for (let index = 0; index < pakli.length; index++) {
        kiiras += `<div class='kartya'> <img src=${hatLap} alt='memoria' class='kep' id=${index}> </div>`;
    }
   return kiiras;
   
}

function forditas() {
    if (kivalasztot.length == 2) {
        return;
    }
    const kep = $(this);
    const index = kep.attr("id");
    if (kivalasztot.includes(index) == false) {
        console.log("forditas");
        kivalasztot.push(index);
        kep.attr("src",eloLapok[pakli[index]]);
        ellenorzes(index);
    }      
}
async function ellenorzes(index) {
    if (kivalasztot.length == 2) {
        if (pakli[kivalasztot[0]] == pakli[kivalasztot[1]]) {
            talalt();
        } else {
            await delay(1000)
            nemTalalt();
        }
    }
}
function talalt() {
    const kep1 = $(`#${kivalasztot[0]}`);
    const kep2 = $(`#${kivalasztot[1]}`);
    kep1.off("click", forditas);
    kep2.off("click", forditas);
    kivalasztot= []
    console.log("Talalt")
}
function nemTalalt() {
    const kep1 = $(`#${kivalasztot[0]}`);
    const kep2 = $(`#${kivalasztot[1]}`);
    kep1.attr("src", hatLap);
    kep2.attr("src", hatLap);
    kivalasztot= []
    console.log("Nem Talalt")
}

// Delay funcion
const delay = ms => new Promise(res => setTimeout(res, ms));

// The Fisher-Yates algorith
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }