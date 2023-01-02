import { countries } from "./countries.js";

//ADICIONA UM NOVO PAIS 

const name = process.argv[2]
const code = process.argv[3]

console.log(name,code)

if(!name || !code) {
    console.log("Faltou o nome ou o codigo do novo país")
} else {
    const novoPais = {
        name,
        code,
    }
    countries.push(novoPais)
    console.log(countries[countries.length-1])
}
