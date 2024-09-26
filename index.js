const pokemonContainer = document.getElementById("pokemon-container");
console.log(pokemonContainer);
pokemonContainer.style.visibility = "hidden";

const pokemonName = document.getElementById("pokemon_species");
console.log(pokemonName);

const stats = document.getElementById("stats");
stats.style.display = "flex";
stats.style.flexDirection = "column";
stats.style.justifyContent = "space-between";
stats.style.padding = "20px";

console.log(stats);

const abilities = document.getElementById("abilities");
console.log(abilities);

function getPokemonData() {
  let nameofthepokemon = document.getElementById("pokemon-name").value;
  console.log(nameofthepokemon);
  if (nameofthepokemon === "") {
    alert("Please enter a Pokemon name");
    return;
  }
  const url = `https://pokeapi.co/api/v2/pokemon/${nameofthepokemon}`;
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      pokemonName.innerText = `  ${(data.species.name).toUpperCase()}`;
      pokemonName.style.letterSpacing = '35px';
      pokemonName.style.fontSize = '50px';
      console.log(data.species.name);
      const div = document.querySelector("div");
      const image = document.querySelector("img");
      image.src = data.sprites.front_shiny;
      image.style.width = "300px";
      image.style.height = "300px";
      image.style.marginLeft = "100px";
      image.style.marginTop = "50px";
      image.style.marginBottom = "0px";
      
      image.style.border = "20px solid white";
      image.style.borderRadius = "50%";

      stats.innerHTML = "";

      const heading = document.createElement("p");
      heading.innerText = "Stats";
      heading.style.fontSize = "40px";
      heading.style.fontWeight = "bold";
      heading.style.textAlign = "center";
      heading.style.textDecoration = "underline";
      heading.style.textDecorationColor = "orange";
      heading.style.marginBottom = "0px";

      stats.appendChild(heading);
      data.stats.forEach((element) => {
        const statName = document.createElement("div");
        statName.innerText = element.stat.name;
        statName.style.fontSize = "30px";
        statName.style.fontWeight = "bold";
        statName.style.textAlign = "left";
        const statValue = document.createElement("div");
        statValue.innerText = element.base_stat;
        statValue.style.fontSize = "20px";
        statValue.style.fontWeight = "bold";
        statValue.style.textAlign = "right";

        console.log(element.stat.name);

        stats.appendChild(statName);
        stats.appendChild(statValue);
      });
      abilities.innerHTML = "";
      const heading1 = document.createElement("p");
      heading1.innerText = "Abilities";
      heading1.style.fontSize = "40px";
      heading1.style.fontWeight = "bold";
      heading1.style.textAlign = "center";
      heading1.style.textDecoration = "underline";
      heading1.style.textDecorationColor = "orange";
      heading1.style.marginBottom = "0px";


      abilities.appendChild(heading1);

      data.abilities.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element.ability.name;
        li.style.listStyle = "none";
        li.style.fontSize = "30px";
        li.style.fontWeight = "bold";
        abilities.appendChild(li);
      });
      pokemonContainer.style.visibility = "visible";
      pokemonContainer.className = `${data.types[0].type.name}`;
      console.log(data.types[0].type.name);
    });
    
}

const button = document.getElementById("search");
button.addEventListener("click", getPokemonData);

