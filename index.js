// variables carrousel 1



const fleche_gauche = document.getElementById('fleche_gauche');
const fleche_droite = document.getElementById('fleche_droite');
const carrousel = document.getElementById('images_carrousel1');
let right_movee = 0;
fleche_droite.addEventListener('click', right_move);
fleche_gauche.addEventListener('click', left_move);

// 1er carrousel

function right_move(){

    // si la position right de mes images est inferieur à 630% alors lorsque je clique sur la fleche droite on ajoute 105%
    if(right_movee < 500){
        right_movee += 100;
        carrousel.style.right = right_movee.toString() + '%';
        
    }
}

function left_move(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee > 0){
            right_movee -= 100;
            carrousel.style.right = right_movee.toString() + '%';
            
        }
}
// variables carrousel 2


const fleche_gauche2 = document.getElementById('fleche_gauche2');
const fleche_droite2 = document.getElementById('fleche_droite2');
const carrousel2 = document.getElementById('images_carrousel2');
let right_movee2 = 0;
fleche_droite2.addEventListener('click', right_move2);
fleche_gauche2.addEventListener('click', left_move2);

// 2ème carrousel

function right_move2(){

    // si la position right de mes images est inferieur à 630% alors lorsque je clique sur la fleche droite on ajoute 105%
    if(right_movee2 < 500){
        right_movee2 += 100;
        carrousel2.style.right = right_movee2.toString() + '%';
        
    }
}

function left_move2(){
        // si la position right de mes images est supérieur à 0% alors lorsque je clique sur la fleche droite on enlève 105%
        if(right_movee2 > 0){
            right_movee2 -= 100;
            carrousel2.style.right = right_movee2.toString() + '%';
            
        }
}