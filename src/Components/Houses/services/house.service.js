export const getHouses = ()=>{
    return fetch('https://api.got.show/api/show/houses');
};


export const getHouse = (namePetition)=>{
    return fetch(`https://api.got.show/api/show/houses/${namePetition}`);
};

