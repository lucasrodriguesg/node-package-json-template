import { countries } from "./countries.js";
//BUSCAR PAISES COM INICIAL "B"
const buscar = process.argv[2]

if(!buscar){
    console.log("Falta um argumento")
}else{
    const resultado = countries.filter(countrie => countrie.name.toLowerCase()[0] === buscar.toLowerCase())
    console.log(resultado)
}