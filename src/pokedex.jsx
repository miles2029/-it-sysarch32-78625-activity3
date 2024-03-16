import React, { useState, useEffect } from 'react';
import Pokemon from './pokemon.jsx';

function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [language, setLanguage] = useState('english');

    useEffect(() => {
    fetch("https://us-central1-it-sysarch32.cloudfunctions.net/pokemon")
    .then(response => response.json())
    .then(data => setPokemonList(data));
    }, []);

        const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        };

        return(
            <div>
                <div>
                    <button onClick={() => handleChangeLanguage('english')}>English</button>
                    <button onClick={() => handleChangeLanguage('japanese')}>Japanese</button>
                    <button onClick={() => handleChangeLanguage('chinese')}>Chinese</button>
                    <button onClick={() => handleChangeLanguage('french')}>French</button>
                </div>
                <div>
                    {pokemonList.map(pokemon => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
                    ))}
                </div>
            </div>
        );
}

export default Pokedex;