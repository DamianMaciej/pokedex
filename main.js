const infoBtn = document.querySelector(`.searchPokemon`);
const pokemonSpicies = document.querySelector(`.pokemonSpicies`);
const pokemon = document.querySelector(`.pokemon`).value;
const pokeImg = document.querySelector(`.pokemonImg`);
const pokeName = document.querySelector(`.pokemonName`);
const pokeHeight= document.querySelector(`.pokemonHeight`);
const pokeWeight = document.querySelector(`.pokemonWeight`);
const pokeHp = document.querySelector(`.pokemonHp`);
const pokeAtk = document.querySelector(`.pokemonAtk`);
const pokeDef = document.querySelector(`.pokemonDef`);

const apiData = {
    url: `https://pokeapi.co/api/v2/pokemon/`,
    type: pokemon,
}

const {url, type} = apiData;
const apiURL = `${url}${type}`;

console.log(apiURL)

const searchPokemon = () => {
    fetch(apiURL)
        .then((info) => info.json())
        .then((infoPromise) => refresh(infoPromise))
        

    const refresh = (info) => {
        console.log(info)
        pokeWeight.textContent = `Weight: ` + info.weight;
        pokeName.textContent = info.name;
        pokeHeight.textContent = `Height: ` + info.height;
        pokeImg.src = info.sprites.front_default;
        pokeHp.textContent = `HP: ` + info.stats[0].base_stat;
        pokeAtk.textContent = `ATK: ` + info.stats[1].base_stat
        pokeDef.textContent = `DEF: ` + info.stats[2].base_stat
    }
}


infoBtn.addEventListener(`click`, searchPokemon);