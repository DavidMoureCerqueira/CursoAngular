

export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1:Passenger={
    name: "David",
}
const passenger2:Passenger={
    name: "Fernando",
    children:['Natalia','Elizabeth'],
}

const printChildren =({name,children} : Passenger) => {



    const howManyChildren=children?.length || 0;
    //const howManyChildren=children!.length;

    
    
    console.log(name, "tiene", howManyChildren, 'hijos');
}

printChildren(passenger1);

