export const getCharacters = ()=>{
    return fetch('https://api.got.show/api/show/characters');
};


export const getCharacter = (namePetition)=>{
    return fetch(`https://api.got.show/api/show/characters/${namePetition}`);
};