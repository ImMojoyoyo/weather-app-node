const inquirer = require('inquirer'); // Permite interactuar con la consola.
const colors = require('colors');


const questionsInquire = [
    {
        type: 'list',
        name : 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Looking for a City`
            },
            {
                value: 2,
                name: `${'2.'.green} History`
            },
            {
                value : 0,
                name : `${'0.'.green} Exit`
            }
        ]
        
    }
];


const inquirerMenu = async() => {
        console.log("=======================".yellow);
        console.log("   Select an option    ");
        console.log("=======================".yellow);

        const { option }  = await inquirer.prompt(questionsInquire);
        return option ;

}

const readInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name : 'desc',
            message : message,
            validate( value ) {
                if(value.length === 0){
                    return 'Please insert a value';
                }
                return true;
            }
        }
    ];

    const   { desc }   = await inquirer.prompt(question);
    return desc;

}

const pause = async() =>{
    const inputInquirer = [
        {
            type: 'input',
            name : 'answer_user',
            message : `\nPress ${ 'ENTER'.green } to continue\n`
        }
    ];

    const answer = await inquirer.prompt(inputInquirer);
    console.log('\n');
    return answer;

}

const removeTasksLists = async( tasks = [] ) =>{
   const choices = tasks.map( (task, i) => {
        const idx = `${ i + 1}`.green;

        return {
            value : task.id,
            name : `${ idx } ${ task.desc }`
        }
   });

   const questionsInquire = [{
        type: 'list',
        name : 'id',
        message: 'Delete',
        choices
    }];
   const { id } = await inquirer.prompt( questionsInquire );
   return id;
}

const confirm = async (message) => {

        const question = [
            {
                type : 'confirm',
                name : 'ok',
                message : message
            }
        ];

    const { ok } = await inquirer.prompt( question );
    return ok;

}


module.exports = {
    inquirerMenu,
    pause,
    readInput,
    removeTasksLists,
    confirm
}