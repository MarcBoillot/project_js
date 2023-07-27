//----------------------------------------------------------------
//Choix d'affichage d'un formulaire ou non 
//----------------------------------------------------------------

function affichageForm() {
    const btnAffichage = document.getElementById('btnAjoutImg');
    const Affichageform = document.getElementById('form');
    let apparaitreform = false;
    btnAffichage.addEventListener('click', function () {
        if (!apparaitreform) {
            Affichageform.style.display = 'block';
            apparaitreform = true;
            btnAffichage.innerHTML = 'masquer';
        } else {
            Affichageform.style.display = 'none';
            apparaitreform = false;
            btnAffichage.innerHTML = 'Ajouter une image';
        }
    });
}

//----------------------------------------------------------------
//Valider les données entrées dans le formulaire
//----------------------------------------------------------------

let post = document.getElementById('valider');
//j'ecoute le click
post.addEventListener('click', (event) => {
    //annule le comportement par defaut de l'envoi de form
    event.preventDefault();
    //je recup dans la variable l'html de la balise avec l'id 
    let title = document.getElementById('title');
    let image = document.getElementById('imageInput');
    addFormulaire(title, image);
    // j'efface les valeurs du form après les avoir envoyés 
    document.getElementById("form").reset();
})

//----------------------------------------------------------------
//Ajouter la photo aux autres photos deja presentes 
//----------------------------------------------------------------

function addFormulaire(title, image4) {
    const img_container = document.getElementById('dataDisplay');

    const wrapper_img = document.createElement('div');
    const image3 = document.createElement('img');
    const img_title = document.createElement('p');
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'supprimer';
    //le delete
    btnDelete.addEventListener('click', () => {
        btnDelete.parentElement.remove();
    })
    //creation d'une classe de div qui se nomme post
    wrapper_img.classList.add("post");
    img_title.classList.add('title');
    image3.classList.add('image');
    //recupere l'html de l'api a l'emplacment
    img_title.innerHTML = title.value;
    image3.src = image4.value;
    //voir les appendChild comme les box des div joke_container est
    //le parent de wrapper_joke et joke_title/reponse sont les enfants de 
    //wrapper_joke
    wrapper_img.appendChild(btnDelete);
    img_container.appendChild(wrapper_img);
    wrapper_img.appendChild(img_title);
    wrapper_img.appendChild(image3);
}

//----------------------------------------------------------------
//Création du chemmin pour recupérer l'image sur le pc
//----------------------------------------------------------------

let recuperationImg = document.getElementById('imageInput').addEventListener('change', function () {
    let file = this.files[0]; // Récupérer le fichier d'image
    if (file) {
        let reader = new FileReader(); // Créer un objet FileReader
        // Définir la fonction de rappel à exécuter lorsque la lecture du fichier est terminée
        reader.onload = function (event) {
            let imageElement = document.createElement('img');
            imageElement.src = event.target.result; // Récupérer l'URL de l'image depuis l'objet FileReader
            document.body.appendChild(imageElement); // Afficher l'image dans la page
        };
        // Lire le contenu du fichier d'image sous forme de données URL

        reader.readAsDataURL(file);
    }
});

//----------------------------------------------------------------
//Affichage MOSAIQUE OU COLONNE
//----------------------------------------------------------------

let mosaique = document.getElementsByClassName('btnmosaique')[0];
let colonne = document.getElementsByClassName('btncolonne')[0];
//fonction lors du click btn -> mosaique ou colonne return css choisi
mosaique.addEventListener('click', function () {
    const pokemon_container = document.getElementById('dataDisplay');
    pokemon_container.classList.add('mosaique');
    pokemon_container.classList.remove('colonne');
});
colonne.addEventListener('click', function () {
    const pokemon_container = document.getElementById('dataDisplay');
    pokemon_container.classList.add('colonne');
    pokemon_container.classList.remove('mosaique');
});

//----------------------------------------------------------------
//Affichage des cartes pokemons
//----------------------------------------------------------------

function dataDisplay(data) {
    console.log(data);
    //recuperation dans la variable tous le dom par l'id et en lien avec l'id html
    const pokemon_container = document.getElementById('dataDisplay');
    for (const pokemon of data.results) {
        console.log(pokemon);
        // creation de div 
        const wrapper_pokemon = document.createElement('div');
        const pokemon_name = document.createElement('p');
        const pokemon_img = document.createElement('img');
        //creation d'une classe de div 
        wrapper_pokemon.classList.add("carte_pokemon");
        pokemon_container.classList.add("mosaique");
        pokemon_container.classList.add("colonne");
        //definition du contenu
        pokemon_name.innerHTML = pokemon.name;
        //ajouter les div et img au DOM
        pokemon_container.appendChild(wrapper_pokemon);
        wrapper_pokemon.appendChild(pokemon_name);
        wrapper_pokemon.appendChild(pokemon_img);
        // je recupere le pokemon concerné
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
                //source de l'image
                pokemon_img.src = data.sprites.front_default;
                console.log(data);
            })
    }
}

//----------------------------------------------------------------
//Suppression d'un post
//----------------------------------------------------------------

function deletePost() {
    const deletePost = document.getElementsByClassName('post');
    deletePost.addEventListener('click', function () {
        deletePost.remove();
    });
}

//----------------------------------------------------------------
//récuparation de l'image par la fonction qui recupere l'url de l'image
//----------------------------------------------------------------

function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => dataDisplay(data))
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}

//----------------------------------------------------------------
// Appel initial pour récupérer et afficher les données au chargement de la page
//----------------------------------------------------------------

fetchData('https://pokeapi.co/api/v2/pokemon/');
affichageForm();
addFormulaire();
//----------------------------------------------------------------
// Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton
//----------------------------------------------------------------

const refreshButton = document.getElementById('refreshButton');







