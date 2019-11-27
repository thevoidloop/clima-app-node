const axios = require('axios');




const getLugarLatLon = async(dir) => {

    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '244ba6f090mshb195ee6a23b3d49p1ae4afjsn9e42943cf50c' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay un resultado para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;


    return {
        direccion,
        lat,
        lon
    };
};


module.exports = {
    getLugarLatLon
};