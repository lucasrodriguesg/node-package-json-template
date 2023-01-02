import { countries } from "./countries.js";
//RETORNA SEMPRE O BRAZIL
const buscar = process.argv[2]
if(!buscar){
    console.log("Erro no argumento de busca")
} else {
const resultado = countries.filter((countrie) => {
    return countrie.name.toLowerCase().includes(buscar.toLowerCase())
})
console.log(resultado)
}