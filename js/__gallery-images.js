        // Fonction pour récupérer les données et les afficher
        function fetchDataAndDisplay() {
            const pokemon_container = document.getElementById('dataDisplay');
            fetch('https://pokeapi.co/api/v2/pokemon/')
                .then(response => response.json())
                .then(data => {
                    for (const pokemon of data.results){
                        fetch(pokemon.url)
                        .then(response => response.json())
                        .then(data => console.log(pokemon.url))
                        console.log(pokemon);
                        const pokemon_name = document.createElement('p');
                        pokemon_name.innerHTML = pokemon.name;
                        const pokemon_img= document.createElement('div');
                        pokemon_img.innerHTML = pokemon.url;
                        pokemon_container.appendChild(pokemon_name);
                        pokemon_container.appendChild(pokemon_img);
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
        