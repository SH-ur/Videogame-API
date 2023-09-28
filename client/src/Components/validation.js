export const validation = (gameData)=>{
    let err={};
    let validateRating = /^-?\d+(.\d+)?$/;
    //let validateReleased= /^(0[1-9]|1\d|2\d|3[01])/(0[1-9]|1[0-2])/\d{4}$/;

//Practica para control de fecha


const {name, description, image, platforms, rating, released}= gameData;
const noMore = released.slice(0, 4)
console.log(noMore);

//Parte 2
const theDate = new Date();
const days = theDate.getDate();
const months =theDate.getMonth();
const years = theDate.getFullYear();

const dateOfCompare = `${years}/${months}/${days}`;
console.log(dateOfCompare);
//Termina la práctica aquí XD
    if(!name) err.name='Coloca un nombre por favor'
    
    if(!image) err.image= 'Coloca la dirección de tu imagen por favor'

    if(!description) err.description='Coloca un descripción del juego por favor';
    else if(description.includes('Fuck') || description.includes('Ass') || description.includes('Damn')
    || description.includes('Motherfucker')) err.description='Dont say awful words!';
    if(!platforms)err.platforms='El campo de plataforma está vacío, coloca al menos uno por favor';
    if(!rating || !validateRating.test(rating) ) err.rating='El rating no debe estar vacío'
    else if(rating > 6) err.rating='El rating no debe ser mayor a 6';
    else if(rating <=0) err.rating='El rating no debe ser negativo, mi estimad@'

    if(!released) err.released = 'Coloca fecha de lanzamiento... porfavor'
    else if(released > dateOfCompare) err.released= 'Por favor no te pases de fecha.'
    else if (noMore <= 1940) err.released = 'Y tampoco coloques fechas donde los videojuegos no existían please.';
    return err;
    
}