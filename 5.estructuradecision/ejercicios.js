var nombre = 'jose';
var nota = 3;

//SIMPLES: con una sola condicion
if(nota >= 5){
    console.log(nombre + ' esta aprobado con '+ nota)
} /*COMPUESTO desde aqui va con los dobles*/
else{
    console.log(nombre + ' esta desaporbado con '+ nota)
}
//ANIDADAS
var nombre = 'manuel';
var nota = 2;

if(nota>=7){
    console.log(nombre + ' esta aprobado con '+ nota)
}
else{
    if(nota>=5){
        console.log(nombre + ' esta con chance con '+ nota)
    }
    else{
        console.log(nombre + ' ya reprobo con' + nota)
    }
}/*A diferencia de una estructura secuencial pos este no sigue el orden, pos se salta si es necesario*/