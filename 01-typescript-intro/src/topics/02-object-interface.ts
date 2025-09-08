
//const skills: string[] = ['Bash', 'Counter','Healing'];         //Array de strings
//Si sabemos que la variable no va a cambiar, usar constante

interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;                  //El interrogante lo hace opcional
}


const strider: Character ={             //Al asignarle la constante de tipo Character, lo que hago es tipar las caracteristicas del objeto que he definido en la interface
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}


strider.hometown='Rivendell';


console.table(strider);

export{}