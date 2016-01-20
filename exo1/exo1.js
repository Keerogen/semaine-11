$proposition = document.getElementById("proposition");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
reponse = Math.ceil(Math.random() * 100)

function verifier() {
    if ($proposition.value < reponse) {
        $resultat.innerHTML = "pas suffisant :)";
    }
    if ($proposition.value == reponse) {
        $resultat.innerHTML = "Perfect";
    }
    if ($proposition.value > reponse) {
        $resultat.innerHTML = "Ttrop :(";
    }
}

$bouton.onclick = verifier;