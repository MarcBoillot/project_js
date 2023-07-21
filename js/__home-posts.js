
function fetchDataAndDisplay() {
    const joke_container = document.getElementById('dataDisplay');
    fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10')
        .then(response => response.json())
        .then(data => {
            for (const joke of data.jokes){
                console.log(joke);
                const joke_title = document.createElement('div');
                joke_title.innerHTML = joke.setup;
                const joke_reponse= document.createElement('p');
                joke_reponse.innerHTML = joke.delivery;
                
                joke_container.appendChild(joke_title);
                joke_container.appendChild(joke_reponse);
            }
            
        })
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}

// Appel initial pour récupérer et afficher les données au chargement de la page
fetchDataAndDisplay();
// Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', refreshPage);
