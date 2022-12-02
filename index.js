// carroussel 1

// si je clique 1 fois sur la fleche droite, alors la height de ma div devient 0px, si je clique 2 fois sur la fleche, la width de la div 2 devient 0, ...

const flecheDroite = document.querySelector('#fleche_droite');
const flecheGauche = document.querySelector('#fleche_gauche');
const cards1 = document.querySelectorAll('.card1'); // div contenant image description date et prénom
const prenoms1 = document.querySelectorAll('.prenom1');
const ages1 = document.querySelectorAll('.age1');
const descriptions1 = document.querySelectorAll('.description1');

let indexDescription1 = 0;
let indexDescription2 = 0;
let indexDescription3 = 0;
let i = 0;

for(let i = 0; i < cards1.length; i++){
    cards1[i].style.transition = 'all 0.5s ease';
    prenoms1[i].style.transition = 'all 0.5s ease';
    ages1[i].style.transition = 'all 0.5s ease';
    descriptions1[i].style.transition = 'all 0.5s ease';
}



flecheDroite.addEventListener('click', ()=>{

    // carrousel
    if(i < cards1.length - 1){
        cards1[i].style.height = "0px";
        cards1[i].style.marginRight = "0px";
        ages1[i].style.fontSize = "0px";
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
        ages1[i].style.fontSize = "1.2em";
    prenoms1[i].style.fontSize = "1.6em";
    descriptions1[i].style.fontSize = "0.8em";
    }

    
    });



        // toutes les 15millisecondes je lance ma fonction descriptionCreation qui permet d'ajouter lettre par lettre ma description

        setInterval(descriptionCreation1, 15);


    
        function descriptionCreation1(){
         
            
        
         let textDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe ipsa doloremque earum quibusdam, consequatur repellendus, quasi eveniet corrupti maxime hic rem temporibus laudantium";
                
        // si la longueur de ma description écrite est inferieur à la longueur du texte total
                if(descriptions1[i].innerText.length < textDescription.length){
                // l'index de depart utilisé est égal à la longueur de ma description (si je change de div dans la carrousel l'index a pu
                // être réinitialisé)
                    indexDescription1 = descriptions1[i].innerHTML.length;
        
                    // j'injecte dans ma description les lettre correspondante
                    descriptions1[i].innerHTML += textDescription[indexDescription1];
                   
 
                }
        }


       


// carroussel 2




const flecheDroite2 = document.querySelector('#fleche_droite2');
const flecheGauche2 = document.querySelector('#fleche_gauche2');
const cards2 = document.querySelectorAll('.card2');
const prenoms2 = document.querySelectorAll('.prenom2');
const ages2 = document.querySelectorAll('.age2');
const descriptions2 = document.querySelectorAll('.description2');

for(let i = 0; i < cards2.length; i++){
    cards2[i].style.transition = 'all 0.5s ease';
    prenoms2[i].style.transition = 'all 0.5s ease';
    ages2[i].style.transition = 'all 0.5s ease';
    descriptions2[i].style.transition = 'all 0.5s ease';
}


let j = 0;
flecheDroite2.addEventListener('click', ()=>{
    if(j < cards2.length - 1){
        cards2[j].style.height = "0px";
        cards2[j].style.marginRight = "0px";
        ages2[j].style.fontSize = "0px";
        prenoms2[j].style.fontSize = "0px";
        descriptions2[j].style.fontSize = "0px";
        

        j++;
    }

});

// si je clique 1 fois sur la fleche gauche, alors la height de ma div devient initial, si je clique 2 fois sur la fleche, la width de la div 2 devient initial, ...



flecheGauche2.addEventListener('click', ()=>{
    if(j > 0){
        j--;
        cards2[j].style.height = "100%";
        cards2[j].style.marginRight = "15px";
        ages2[j].style.fontSize = "1.2em";
    prenoms2[j].style.fontSize = "1.6em";
    descriptions2[j].style.fontSize = "0.8em";
    }

    
    });


        // toutes les 15millisecondes je lance ma fonction descriptionCreation qui permet d'ajouter lettre par lettre ma description

setInterval(descriptionCreation2, 15);


    
function descriptionCreation2(){
 
    

 let textDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe ipsa doloremque earum quibusdam, consequatur repellendus, quasi eveniet corrupti maxime hic rem temporibus laudantium";
        
// si la longueur de ma description écrite est inferieur à la longueur du texte total
        if(descriptions2[j].innerText.length < textDescription.length){
        // l'index de depart utilisé est égal à la longueur de ma description (si je change de div dans la carrousel l'index a pu
        // être réinitialisé)
            indexDescription2 = descriptions2[j].innerHTML.length;

            // j'injecte dans ma description les lettre correspondante
            descriptions2[j].innerHTML += textDescription[indexDescription2];
           

        }
}



// carroussel 3




const flecheDroite3 = document.querySelector('#fleche_droite3');
const flecheGauche3 = document.querySelector('#fleche_gauche3');
const cards3 = document.querySelectorAll('.card3');
const prenoms3 = document.querySelectorAll('.prenom3');
const ages3 = document.querySelectorAll('.age3');
const descriptions3 = document.querySelectorAll('.description3');

for(let i = 0; i < cards3.length; i++){
    cards3[i].style.transition = 'all 0.5s ease';
    prenoms3[i].style.transition = 'all 0.5s ease';
    ages3[i].style.transition = 'all 0.5s ease';
    descriptions3[i].style.transition = 'all 0.5s ease';
}


let k = 0;
flecheDroite3.addEventListener('click', ()=>{
    if(k < cards3.length - 1){
        cards3[k].style.height = "0px";
        cards3[k].style.marginRight = "0px";
        ages3[k].style.fontSize = "0px";
        prenoms3[k].style.fontSize = "0px";
        descriptions3[k].style.fontSize = "0px";


        k++;
    }

});

// si je clique 1 fois sur la fleche gauche, alors la height de ma div devient initial, si je clique 2 fois sur la fleche, la width de la div 2 devient initial, ...



flecheGauche3.addEventListener('click', ()=>{
    if(k > 0){
        k--;
        cards3[k].style.height = "100%";
        cards3[k].style.marginRight = "15px";
        ages3[k].style.fontSize = "1.2em";
    prenoms3[k].style.fontSize = "1.6em";
    descriptions3[k].style.fontSize = "0.8em";
    }

    
    });

        // toutes les 15millisecondes je lance ma fonction descriptionCreation qui permet d'ajouter lettre par lettre ma description

        setInterval(descriptionCreation3, 15);


    
        function descriptionCreation3(){
         
            
        
         let textDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe ipsa doloremque earum quibusdam, consequatur repellendus, quasi eveniet corrupti maxime hic rem temporibus laudantium";
                
        // si la longueur de ma description écrite est inferieur à la longueur du texte total
                if(descriptions3[k].innerText.length < textDescription.length){
                // l'index de depart utilisé est égal à la longueur de ma description (si je change de div dans la carrousel l'index a pu
                // être réinitialisé)
                    indexDescription3 = descriptions3[k].innerHTML.length;
        
                    // j'injecte dans ma description les lettre correspondante
                    descriptions3[k].innerHTML += textDescription[indexDescription3];
                   
       
                }
        }









    // Animation icone Menu *************************************************************************************************

const all_trait = document.getElementsByClassName('icone_head')[0];
const trait1 = document.getElementsByClassName('trait1')[0];
const trait2 = document.getElementsByClassName('trait2')[0];
const trait3 = document.getElementsByClassName('trait3')[0];
const text = document.getElementsByClassName('text_bienvenue')[0];

all_trait.addEventListener('click', animation_trait);

function animation_trait(){
    all_trait.style.width = '100%';
    all_trait.style.height = '5em';
   
    trait1.style.height = '0px';
    trait1.style.opacity = '0';
    trait1.style.transition = 'all 1s ease';

    trait2.style.height = '0px';
    trait2.style.opacity = '0';
    trait2.style.transition = 'all 1s ease';

    trait3.style.transition = 'all 1s ease';
    trait3.style.width = '100%';
    trait3.style.marginTop = '0.5em';

    text.style.transition = 'all 1s ease';
    text.style.width = '100%';
    text.style.height = '20px';
    text.style.fontSize = '14px';




}