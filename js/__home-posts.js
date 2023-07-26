/*function buttonClick() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }*/

//----------------------------------------------------------------
//Choix affichage du formulaire ou non
//----------------------------------------------------------------

  function affichageForm (){
    const btnAffichage = document.getElementById('btnAjout');
    const Affichageform = document.getElementById('form');
    let apparaitreform = false;
    btnAffichage.addEventListener('click',function (){
        
        if(!apparaitreform){
            Affichageform.style.display = 'block';
            apparaitreform = true;
            btnAffichage.innerHTML = 'masquer';
        }else{
            Affichageform.style.display = 'none';
            apparaitreform = false;
            btnAffichage.innerHTML = 'Afficher le post';
        }
    });
}

//----------------------------------------------------------------
//Validation du formulaire
//----------------------------------------------------------------

let post = document.getElementById('validerForm');
//j'ecoute le click
  post.addEventListener ('click' , (event) => {
    //annule le comportement par defaut de l'envoi de form
    event.preventDefault();
    //je recup dans la variable l'html de la balise avec l'id 
    let title = document.getElementById('title');
    let texte = document.getElementById('texte');
    addFormulaire(texte,title);
    // j'efface les valeurs du form après les avoir envoyés 
    document.getElementById("form").reset();
})

//----------------------------------------------------------------
//Creation de d'élements et recuperation des valeurs entrées
//----------------------------------------------------------------

function addFormulaire (title, texte){
  const joke_container = document.getElementById('dataDisplay');
   
        const wrapper_joke = document.createElement('div');
        const joke_title = document.createElement('h3');
        const joke_reponse= document.createElement('p');
        //creation d'une claase de div qui se nomme post
        wrapper_joke.classList.add("post");
        joke_title.classList.add('title');
        joke_reponse.classList.add('response');
        //recupere l'html de l'api a l'emplacment
        joke_reponse.innerHTML = title.value;
        joke_title.innerHTML = texte.value;
        //voir les appendChild comme les box des div joke_container est
        //le parent de wrapper_joke et joke_title/reponse sont les enfants de 
        //wrapper_joke
        joke_container.appendChild(wrapper_joke);
        wrapper_joke.appendChild(joke_title);
        wrapper_joke.appendChild(joke_reponse);
}

//----------------------------------------------------------------
//Création d'éléments et recupération des données de l'API
//----------------------------------------------------------------

function dataDisplay(data){
    const joke_container = document.getElementById('dataDisplay');
    for (const joke of data.jokes){
        const wrapper_joke = document.createElement('div');
        const joke_title = document.createElement('h3');
        const joke_reponse= document.createElement('p');
        //creation d'une classe de div qui se nomme post
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
    
    fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=20')
        .then(response => response.json())
        .then(data => dataDisplay(data))
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}

//----------------------------------------------------------------
// Appel des fonctions pour récupérer et afficher les données au chargement de la page
//----------------------------------------------------------------

fetchData();
affichageForm();

//----------------------------------------------------------------
// Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton
//----------------------------------------------------------------

document.getElementById('refreshButton').addEventListener('click', function(){
    location.reload();
  });
document.getElementById('validerForm').addEventListener('click', function(){
    console.log('form');
  });

