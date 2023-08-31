import { readFileSync } from 'fs';
import path from 'path';

// you can generate the relative path to the CSV that is in the parent folder of this file:
const csvFile: string = path.join(__dirname, '..', 'postalcodes.csv');

// file can be read into a string with the `readFileSync` function:
let fileContents: string = readFileSync(csvFile, 'utf-8');


// the string can be split into lines with `split`:
let lines: string[] = fileContents.trim().split('\n');

console.log('The first 5 lines read from CSV file:');
console.table(lines.slice(0, 5));


// you can access command line arguments via `process.argv` variable:
let params: string[] = process.argv;

console.log('The contents of the `process.argv` array:');
console.table(params);

let rivi;
let mycode = process.argv[2];


function searchCode(mycode: string){
    for (rivi of fileContents.split('\n')){
        let listaus = rivi.split(',')
        
        type postikoodit = [string, string];
        let koodilistaus : postikoodit = [listaus[0], listaus[1]]
        let found: boolean;
        for (let item of koodilistaus){
            
        if (item === mycode){
            console.log(listaus[1])
            found = true;
            
        }else{
            found = false;
        } 
            
        }
        if(found = false){
            console.log('Ei löytynyt annettua postikoodia');
            }
    }

    

return 
}

    

searchCode(mycode);





