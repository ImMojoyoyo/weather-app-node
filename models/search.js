const axios = require('axios');

class Search {

    history = ["London", "Barcelona", "Onil", "Alicante"];

    constructor(){
        // TODO: Read DB if exist
    }

    async city( place = ""){  
        try {

            const instance = axios.create({
                baseUrl : `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params: {
                    'access_token' : 'pk.eyJ1Ijoic2VyZ2lzYXJyaW8iLCJhIjoiY2t4NmJhZzRlMmQ4OTJxb2IwYjliOHU1cSJ9.0aWUQRF3EIsMHynfOAeNZA',
                    'limit' : 5,
                    'language' : 'es'
                }
            });
            
            const resp = await instance.get();
            console.log(resp.data);

           

            return []; // Return places
            
        } catch (error) {
            console.log('Something in the HTTP request failed');
            throw error;
        }              
        
    }

}


module.exports = {
    Search
}



