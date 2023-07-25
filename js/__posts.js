function fetchDataAndDisplay() {
    fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}

// Appel initial pour récupérer et afficher les données au chargement de la page
fetchDataAndDisplay();

// Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton
