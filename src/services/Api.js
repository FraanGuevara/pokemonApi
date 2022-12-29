

/* SERVICE FOR ARRAY PKM */
export const Api = async (url) => {
    let data;
    let axios = require('axios');

    let config = {
        method: 'get',
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20',
        headers: {}
    };

    await axios(config)
        .then(function (response) {
            data = JSON.stringify(response.data.results);
        })
        .catch(function (error) {
            console.log(error);
        });
    return data
}

/* SERVICE FOR DATA PKM */
export const pokemonDataApi = async (url) => {
    let dataPkm;
    var axios = require('axios');

    var config = {
        method: 'get',
        url: url,
        headers: {}
    };

    await axios(config)
        .then(function (response) {
            dataPkm= JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    return dataPkm;
}
