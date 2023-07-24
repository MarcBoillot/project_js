function ajoutClick (){
    document.getElementById("openFormButton").addEventListener("click", function() {
    var formContainer = document.getElementById("formContainer");
    formContainer.style.display = "block";
    });
 }
function dataDisplay(data){
    const joke_container = document.getElementById('dataDisplay');
    for (const joke of data.jokes){
        const wrapper_joke = document.createElement('div');
        const joke_title = document.createElement('h3');
        const joke_reponse= document.createElement('p');
        //creation d'une claase de div qui se nomme post
        wrapper_joke.classList.add("post");
        joke_title.classList.add('title');
        joke_reponse.classList.add('response');
        //recupere l'html de l'api a l'emplacment
        joke_reponse.innerHTML = joke.delivery;
        joke_title.innerHTML = joke.setup;
        //voir les appendChild comme les box des div joke_container est
        //le parent de wrapper_joke et joke_title/reponse sont les enfants de 
        //wrapper_joke
        joke_container.appendChild(wrapper_joke);
        wrapper_joke.appendChild(joke_title);
        wrapper_joke.appendChild(joke_reponse);
    }
}

function fetchData() {
    
    fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10')
        .then(response => response.json())
        .then(data => dataDisplay(data))
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}

// Appel initial pour récupérer et afficher les données au chargement de la page
fetchData();
// Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton

const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', refreshPage);
