import './pokemon.css'    
    const Pokemon = ({ pokemon,language }) => {
        const { id, name, type, base, image } = pokemon;
    return(
        <>
                <div className="card">
                    <img src={image} alt="pokemon pic"></img>
                    <h2>[{id}]<span>{name[language]}</span> </h2>
                    <h3>{pokemon.type.map((type, index) => (<span key={index}> {type}</span>)) }</h3>
                    <p>HP: {base.HP}<span>Speed: {base.Speed}</span></p>
                    <p>Attk: {base.Attack} <span>Sp.Attk: {base['Sp. Attack']}</span> </p>
                    <p>Def:{base.Defense} <span>Sp.Def: {base['Sp. Defense']} </span> </p>
                </div>
        </>
   
          
    );

};

export default Pokemon;