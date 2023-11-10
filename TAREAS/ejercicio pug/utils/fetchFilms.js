const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.API_KEY;

const getFilm = async (id="") => {
    let response = await fetch(`https://www.omdbapi.com/t=${id}?apikey=${apiKey}`); 
    let film = await response.json();

    return film;
};

module.exports = {getFilm};