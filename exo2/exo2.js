//decalration variable
var rand;
var choix;
//acces au dom
var $victoire = document.querySelector('#victoire p');


//random
function $rand() {
    rand = Math.floor((Math.random() * 5) + 1);
}

// comparaison 
function pfc(choix, rand) {
    if (choix === rand) {
        $choix = "match nul";
    } else if (choix == 1 && rand == 2) {
        $choix = "VS Feuille It's lost !";
    } else if (choix == 1 && rand == 3) {
        $choix = "VS Ciseaux tu le casse !";
    } else if (choix == 1 && rand == 4) {
        $choix = "VS lezard tu l'écrase !";
    } else if (choix == 1 && rand == 5) {
        $choix = "VS Spock ! il te détruit !";
    } else if (choix == 2 && rand == 1) {
        $choix = "VS Pierre ! enroulé !";
    } else if (choix == 2 && rand == 3) {
        $choix = "VS Ciseaux Perdu !"
    } else if (choix == 2 && rand == 4) {
        $choix = "VS Lézard qui te mange !";
    } else if (choix == 2 && rand == 5) {
        $choix = "VS Spock tu le révoque !";
    } else if (choix == 3 && rand == 1) {
        $choix = "VS Pierre qui t'écrase !";
    } else if (choix == 3 && rand == 2) {
        $choix = "VS Feuille que tu découpe !";
    } else if (choix == 3 && rand == 4) {
        $choix = "VS lézard que tu décapite, le pauvre !";
    } else if (choix == 3 && rand == 5) {
        $choix = "VS Spock qui t'écrabouille !";
    } else if (choix == 4 && rand == 1) {
        $choix = "VS Pierre qui t'écrase !";
    } else if (choix == 4 && rand == 2) {
        $choix = "VS Feuille que tu mange !";
    } else if (choix == 4 && rand == 3) {
        $choix = "VS Ciseaux ! R.I.P bro !";
    } else if (choix == 4 && rand == 5) {
        $choix = "VS Spock ! Empoisonne le !";
    } else if (choix == 5 && rand == 1) {
        $choix = "VS Pierre tu la détruit !"
    } else if (choix == 5 && rand == 2) {
        $choix = "VS Feuille qui te repousse :( !";
    } else if (choix == 5 && rand == 3) {
        $choix = "VS cisaux que tu casse !";
    } else if (choix == 5 && rand == 4) {
        $choix = "VS Lézard qui te tue.. !";
    } else {
        $choix = "Error 1337"
    }
    $victoire.innerHTML = $choix;
};

function choixjoueur() {
    choix = document.getElementById('jeux').value;
};
button.onclick = buttonfonction;

function buttonfonction() {
    $rand();
    choixjoueur();
    pfc(choix, rand)
};

function afficherScore() {
    $affichage.innerHTML = "Votre score : " + score;
}