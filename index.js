require('colors');
require('dotenv').config()

const { readInput, inquirerMenu, pause, listPlaces } = require("./helpers/inquirer");
const { Search } = require('./models/search');


//console.log(process.env);

const main = async() => {
    
    const search = new Search();
    let option;
    
    console.clear();
    do{
        option = await inquirerMenu();

        switch(option){
            case 1:
                // Show message input
                const city = await readInput("Looking for some city? ");
                
                // Show places
                const places = await search.city(city);
                
                // Select place
                const  id  = await listPlaces(places);
                const selPlace = places.find( i => i.id === id);
                //console.log(selPlace);

                // TODO: Weather
                const weather = await search.weather(selPlace.latLng[1], selPlace.latLng[0]);
                console.log(weather);

                // TODO: Show result
                console.log('\nInfo of the city\n'.green);
                console.log('City:', selPlace.name);
                console.log('Lat:', selPlace.latLng[1]);
                console.log('Lng:', selPlace.latLng[0]);
                console.log('Temperature:',);
                console.log('Minimum:',);
                console.log('Maximum:',) 

                
            break;
            
            
        }
        
        if(option !== '0') await pause(); 

    }while(option !== 0);

}
main();