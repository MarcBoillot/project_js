let mosaique =document.getElementsByClassName('btnmosaique')[0];
let colonne = document.getElementsByClassName('btncolonne')[0];
//fonction lors du click btn -> mosaique ou colonne return css choisi
mosaique.addEventListener('click',function (){
    const pokemon_container = document.getElementById('dataDisplay');
    pokemon_container.classList.add('mosaique');
    pokemon_container.classList.remove('colonne');
});
colonne.addEventListener('click',function (){
    const pokemon_container = document.getElementById('dataDisplay');
    pokemon_container.classList.add('colonne');
    pokemon_container.classList.remove('mosaique');
});

// Fonction pour afficher les données et les afficher
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
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => dataDisplay(data))
        .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
        });
}

// Appel initial pour récupérer et afficher les données au chargement de la page
fetchData('https://pokeapi.co/api/v2/pokemon/');
AffichagePosition();
// Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton
const refreshButton = document.getElementById('refreshButton');
       /* <button onclick="changerDisposition()">Changer la disposition</button>
<div id="conteneurImages">
<img id="image1" src="chemin/vers/image1.jpg" alt="Image 1">
<img id="image2" src="chemin/vers/image2.jpg" alt="Image 2">
</div>
function changerDisposition() {
// Récupérer les références des images et du conteneur
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const conteneurImages = document.getElementById('conteneurImages');

// Récupérer la disposition actuelle des images
const image1Affichee = (image1.style.display !== 'none');

// Changer la disposition des images en les masquant ou affichant selon la disposition actuelle
if (image1Affichee) {
image1.style.display = 'none';
image2.style.display = 'block';
// Pour aligner les images verticalement lorsque la disposition est changée
conteneurImages.style.flexDirection = 'column';
} else {
image1.style.display = 'block';
image2.style.display = 'none';
// Pour aligner les images horizontalement lorsque la disposition est changée
conteneurImages.style.flexDirection = 'row';
}
}
Dans cet exemple, nous utilisons une variable image1Affichee pour vérifier si la première image est actuellement affichée ou non. Ensuite, lorsque vous cliquez sur le bouton, la disposition des images est modifiée en fonction de l'état actuel.

Notez que vous devrez remplacer "chemin/vers/image1.jpg" et "chemin/vers/image2.jpg" par les URL réelles des images que vous souhaitez afficher. De plus, assurez-vous de placer ce script dans la section <head> ou <body> de votre page HTML.
*/





