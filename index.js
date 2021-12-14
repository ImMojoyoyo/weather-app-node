require('colors');

const { readInput, inquirerMenu, pause } = require("./helpers/inquirer");
const { Search } = require('./models/search');


console.clear();
const main = async() => {
    
    const search = new Search();
    let option;
    

    do{
        option = await inquirerMenu();

        switch(option){
            case 1:
                // Show message input
                const place = await readInput("Looking for some city? ");
                await search.city(place)

                // TODO: Show places

                // TODO: Select place

                // TODO: Weather

                // TODO: Show result
                console.log('\nInfo of the city\n'.green);
                console.log('City:',);
                console.log('Lat:',);
                console.log('Lng:',);
                console.log('Temperature:',);
                console.log('Minimum:',);
                console.log('Maximum:',) 

                
            break;
            
            
        }
        
        if(option !== '0') await pause(); 

    }while(option !== 0);

}
main();