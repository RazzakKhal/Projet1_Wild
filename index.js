// carroussel 1

// si je clique 1 fois sur la fleche droite, alors la height de ma div devient 0px, si je clique 2 fois sur la fleche, la width de la div 2 devient 0, ...

const flecheDroite = document.querySelector('.fleche_droite');
const flecheGauche = document.querySelector('.fleche_gauche');
const cards1 = document.querySelectorAll('.card1');
const prenoms1 = document.querySelectorAll('.prenom1');
const age1 = document.querySelectorAll('.age1');
const descriptions1 = document.querySelectorAll('.description1');

let i = 0;
flecheDroite.addEventListener('click', ()=>{
    if(i < cards1.length - 1){
        cards1[i].style.height = "0px";
        cards1[i].style.marginRight = "0px";
        age1[i].style.fontSize = "0px";
        prenoms1[i].style.fontSize = "0px";
        descriptions1[i].style.fontSize = "0px";
        
        i++;
    }

});

// si je clique 1 fois sur la fleche gauche, alors la height de ma div devient initial, si je clique 2 fois sur la fleche, la width de la div 2 devient initial, ...



flecheGauche.addEventListener('click', ()=>{
    if(i > 0){
        i--;
        cards1[i].style.height = "100%";
        cards1[i].style.marginRight = "15px";
        age1[i].style.fontSize = "1.4em";
    prenoms1[i].style.fontSize = "1.6em";
    descriptions1[i].style.fontSize = "0.8em";
    }

    
    });



// carroussel 2




// carroussel 3