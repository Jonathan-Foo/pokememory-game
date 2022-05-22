//All function related to retrieving data from pokeAPI
import Pokedex from 'pokedex-promise-v2';


const MIN = 1
const MAX = 900
const pokedex = new Pokedex();


const shuffle = (arr) => {
    return arr.slice().sort(() => Math.random() - 0.5);
}


const randomStartID = () => {
    return Math.floor(Math.random() * (MAX -MIN) + MIN)
}

const getRange = (quantity) => {
    const start = randomStartID();
    const end = start + quantity - 1;
    let range = [];
    for (let i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
} 

const capitalize = (str) => {
    const regex = /-[a-z]*/gi;
    const newStr = str.replace(regex, '');
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
}


const fetchPokemonInfo = async (int) => {
    const response = await pokedex.getPokemonByName(int)
    return {id: response.id, name: capitalize(response.forms[0].name), sprite: response.sprites.front_default}
}

const pokemonInfoArr = (arr) => {
    const promises = arr.map(async (id) => await fetchPokemonInfo(id));
    
    return Promise.all(promises);
} 

const preloadImg = (arr) => {
    arr.map(({ sprite }) => { 
        const img = new Image();
        img.src = sprite;    
    })       
}

const newCards = async (quantity) => {
    const intervalArr = getRange(quantity);
    const cards = await pokemonInfoArr(intervalArr);
    // console.log(cards)
    preloadImg(cards);
    const shuffledCards = shuffle(cards);
    return shuffledCards;
}

const fetchCards = {
    newCards,
    shuffle
}

export default fetchCards;