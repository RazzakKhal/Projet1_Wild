// variables carrousel 1



const fleche_gauche = document.getElementById('fleche_gauche');
const fleche_droite = document.getElementById('fleche_droite');
const carrousel = document.getElementById('images_carrousel1');
const paragraphes1 = document.getElementsByClassName('paragraphes_carrousel1')[0];
const prenoms = document.getElementsByClassName('prenom1');
const ages = document.getElementsByClassName('age1');
let right_movee = 0;
let prenoms_left = 15;
let age_left = 50;
fleche_droite.addEventListener('click', right_move);
fleche_gauche.addEventListener('click', left_move);
let index = 1;
let description1 = document.getElementsByClassName('description1');
let description2 = document.getElementsByClassName('description2');

// 1er carrousel

function right_move(){



    // si la position right de mes images est inferieur à 630% alors lorsque je clique sur la fleche droite on ajoute 105%
    if(right_movee < 500){
        right_movee += 100;
        carrousel.style.right = right_movee.toString() + '%';
        paragraphes1.style.right = right_movee.toString() + '%';
        if(prenoms_left < 20){
            prenoms_left += 45;
            age_left -= 30;
        }else{
            prenoms_left -= 45;
            age_left += 30;
        }

       
        for(let i=0; i < prenoms.length; i++){
            prenoms[i].style.left = prenoms_left.toString() + '%';
            ages[i].style.left = age_left.toString() + '%';
            
        }
// pour chaque lettre de chaque paragraphe j'ajoute une classe 

    }
}

function left_move(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee > 0){
            right_movee -= 100;
            carrousel.style.right = right_movee.toString() + '%';
            paragraphes1.style.right = right_movee.toString() + '%';
            if(prenoms_left < 20){
                prenoms_left += 45;
                age_left -= 30;
            }else{
                prenoms_left -= 45;
                age_left += 30;
            }
    
           
            for(let i=0; i < prenoms.length; i++){
                prenoms[i].style.left = prenoms_left.toString() + '%';
                ages[i].style.left = age_left.toString() + '%';
                
            }
            
        }
}
// variables carrousel 2


const fleche_gauche2 = document.getElementById('fleche_gauche2');
const fleche_droite2 = document.getElementById('fleche_droite2');
const carrousel2 = document.getElementById('images_carrousel2');
const paragraphes2 = document.getElementsByClassName('paragraphes_carrousel2')[0];
const prenoms2 = document.getElementsByClassName('prenom2');
const ages2 = document.getElementsByClassName('age2');
let prenoms_left2 = 15;
let age_left2 = 50;
let right_movee2 = 0;
fleche_droite2.addEventListener('click', right_move2);
fleche_gauche2.addEventListener('click', left_move2);

// 2ème carrousel

function right_move2(){

    // si la position right de mes images est inferieur à 630% alors lorsque je clique sur la fleche droite on ajoute 105%
    if(right_movee2 < 500){
        right_movee2 += 100;
        carrousel2.style.right = right_movee2.toString() + '%';
        paragraphes2.style.right = right_movee2.toString() + '%';
        if(prenoms_left2 < 20){
            prenoms_left2 += 45;
            age_left2 -= 30;
        }else{
            prenoms_left2 -= 45;
            age_left2 += 30;
        }

       
        for(let i=0; i < prenoms2.length; i++){
            prenoms2[i].style.left = prenoms_left2.toString() + '%';
            ages2[i].style.left = age_left2.toString() + '%';
            
        }

        
        
    }
}

function left_move2(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee2 > 0){
            right_movee2 -= 100;
            carrousel2.style.right = right_movee2.toString() + '%';
            paragraphes2.style.right = right_movee2.toString() + '%';
            if(prenoms_left2 < 20){
                prenoms_left2 += 45;
                age_left2 -= 30;
            }else{
                prenoms_left2 -= 45;
                age_left2 += 30;
            }
    
           
            for(let i=0; i < prenoms2.length; i++){
                prenoms2[i].style.left = prenoms_left2.toString() + '%';
                ages2[i].style.left = age_left2.toString() + '%';
                
            }
            
        }
}

// variables carrousel 3


const fleche_gauche3 = document.getElementById('fleche_gauche3');
const fleche_droite3 = document.getElementById('fleche_droite3');
const carrousel3 = document.getElementById('images_carrousel3');
const paragraphes3 = document.getElementsByClassName('paragraphes_carrousel3')[0];
const prenoms3 = document.getElementsByClassName('prenom3');
const ages3 = document.getElementsByClassName('age3');
let prenoms_left3 = 15;
let age_left3 = 50;
let right_movee3 = 0;
fleche_droite3.addEventListener('click', right_move3);
fleche_gauche3.addEventListener('click', left_move3);

// 2ème carrousel

function right_move3(){

    // si la position right de mes images est inferieur à 630% alors lorsque je clique sur la fleche droite on ajoute 105%
    if(right_movee3 < 500){
        right_movee3 += 100;
        carrousel3.style.right = right_movee3.toString() + '%';
        paragraphes3.style.right = right_movee3.toString() + '%';
        if(prenoms_left3 < 20){
            prenoms_left3 += 45;
            age_left3 -= 30;
        }else{
            prenoms_left3 -= 45;
            age_left3 += 30;
        }

       
        for(let i=0; i < prenoms3.length; i++){
            prenoms3[i].style.left = prenoms_left3.toString() + '%';
            ages3[i].style.left = age_left3.toString() + '%';
            
        }
        
    }
}

function left_move3(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee3 > 0){
            right_movee3 -= 100;
            carrousel3.style.right = right_movee3.toString() + '%';
            paragraphes3.style.right = right_movee3.toString() + '%';
            if(prenoms_left3 < 20){
                prenoms_left3 += 45;
                age_left3 -= 30;
            }else{
                prenoms_left3 -= 45;
                age_left3 += 30;
            }
    
           
            for(let i=0; i < prenoms3.length; i++){
                prenoms3[i].style.left = prenoms_left3.toString() + '%';
                ages3[i].style.left = age_left3.toString() + '%';
                
            }
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
    all_trait.style.paddingTop = '1.8em';
    trait1.style.width = '100%';
    
    trait2.style.width = '0';
  
    trait2.style.opacity = '0';
    trait3.style.width = '100%';
    trait3.style.marginTop = '1.5em';

    text.style.transition = 'all 1s ease';
    text.style.width = '100%';
    text.style.height = '20px';
    text.style.fontSize = '14px';




}




