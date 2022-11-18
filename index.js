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
        
    }
}

function left_move2(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee2 > 0){
            right_movee2 -= 100;
            carrousel2.style.right = right_movee2.toString() + '%';
            paragraphes2.style.right = right_movee2.toString() + '%';
            
        }
}

// variables carrousel 3


const fleche_gauche3 = document.getElementById('fleche_gauche3');
const fleche_droite3 = document.getElementById('fleche_droite3');
const carrousel3 = document.getElementById('images_carrousel3');
const paragraphes3 = document.getElementsByClassName('paragraphes_carrousel3')[0];
let right_movee3 = 0;
fleche_droite3.addEventListener('click', right_move3);
fleche_gauche3.addEventListener('click', left_move3);

// 2ème carrousel

function right_move3(){

    // si la position right de mes images est inferieur à 630% alors lorsque je clique sur la fleche droite on ajoute 105%
    if(right_movee3 < 600){
        right_movee3 += 100;
        carrousel3.style.right = right_movee3.toString() + '%';
        paragraphes3.style.right = right_movee3.toString() + '%';
        
    }
}

function left_move3(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee3 > 0){
            right_movee3 -= 100;
            carrousel3.style.right = right_movee3.toString() + '%';
            paragraphes3.style.right = right_movee3.toString() + '%';
        }
}