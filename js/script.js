let boutoncovid = document.querySelector('.warningcovid');
let textecovid = document.querySelector('.textecovid')
boutoncovid.addEventListener('click', textecoviddisplay);
function textecoviddisplay(){
    if (textecovid.style.display === "none") {
        textecovid.style.display = "block";
    } else {
        textecovid.style.display = "none";
    }
    }

function cardHover (i){ 
    titresMagiques[i].classList.add('hidden');
    console.log('ajout hidden');
    textesMagiques[i].classList.remove('hidden');
    console.log('remove hidden');
    box[i].style.background = "rgba(47,44,43,0.6), url(../images/image1-osteopathie.jpg) center no-repeat;"
}

/*
const textesMagiques = document.getElementsByClassName('text--magic');
const titresMagiques = document.getElementsByClassName('titre--magic');

for(i=0; i<titresMagiques.length; i++) {
    titresMagiques[i].parentNode.addEventListener('mouseover', textTransform);
    titresMagiques[i].parentNode.addEventListener('mouseout', textTransformOut);
}

function textTransform(event) {
    event.target.querySelector("h2").classList.add ('inactive');
    event.target.querySelector("p").classList.remove('inactive');
}

function textTransformOut(event) {
    event.target.querySelector("h2").classList.remove ('inactive');
    event.target.querySelector("p").classList.add('inactive');
}

*/
