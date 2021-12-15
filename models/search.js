const axios = require('axios');

class Search {

    history = ["London", "Barcelona", "Onil", "Alicante"];

    constructor(){
        // TODO: Read DB if exist
    }

    // TODO: No funciona
    /* get paramsMapbox(){
        return {
            'country' : 'es',
            'limit' : 6, 
            'types' : 'region%2Cplace%2Clocality',
            'language' : 'es',
            'access_token' : 'pk.eyJ1Ijoic2VyZ2lzYXJyaW8iLCJhIjoiY2t4NmJhZzRlMmQ4OTJxb2IwYjliOHU1cSJ9.0aWUQRF3EIsMHynfOAeNZA'
        } 
    } */

    async city( place = ''){  
        try {
            // TODO: No funciona
            /* const instance = axios.create({
                baseUrl : `https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json`,
                params : this.paramsMapbox
            });
            
            const resp = await instance.get( );  */
            const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ place }.json?country=es&limit=6&types=region%2Cplace%2Clocality&language=es&access_token=pk.eyJ1Ijoic2VyZ2lzYXJyaW8iLCJhIjoiY2t4NmJhZzRlMmQ4OTJxb2IwYjliOHU1cSJ9.0aWUQRF3EIsMHynfOAeNZA`)
             return resp.data.features.map( place => ({
                "id" : place.id,
                "name" : place.place_name,
                "latLng" : place.center

            })); 
            
        } catch (error) {
            console.log('Something in the HTTP request failed - city');
            throw error;
        }              
        
    }

    async weather(lat, long){
        try {
            const respWeather = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ long }&appid=75b573d0460304ec2441accd1b011d84`);
            console.log( respWeather )
        } catch (error) {
            console.log('Something in the HTTP request failed - weather');
            throw error;
        }
            
    }

}


module.exports = {
    Search
}



