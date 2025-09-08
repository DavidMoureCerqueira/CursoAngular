

                        //let name= "Strider" //Crear variable
                        //Los Strings en TypeScript no permite los números como Strings
                        //name ='123'; Así permite poner números usando las comillas
const name: string  = 'Strider';  //Crea una constante
let hpPoints: number | 'FULL' = 95;           //Se crea la variable de tipo number ó FULL 
const isAlive: boolean = true;
hpPoints = 'FULL';

console.log({
    name,hpPoints,isAlive
})

export{}; //A vite le damos a entender que este archivo es un módulo