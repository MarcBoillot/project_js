        // Fonction pour afficher les données et les afficher
        function dataDisplay(data){
            console.log(data);
            //recuperation dans la variable tous le dom par l'id et en lien avec l'id html
            const pokemon_container = document.getElementById('dataDisplay');
            for (const pokemon of data.results){
                console.log(pokemon);
                // creation de div 
                const wrapper_pokemon = document.createElement('div');
                const pokemon_name = document.createElement('p');
                const pokemon_img = document.createElement('img');
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
                    //
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

        // Ajoutez un gestionnaire d'événement pour actualiser les données au clic sur le bouton
        const refreshButton = document.getElementById('refreshButton');
        