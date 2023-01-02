// const nome = "Lucas"
// const idade = 28
// const novaIdade = idade + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} `)

const nome = process.argv[2]
const idade = +(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos. \nEm sete anos você terá ${idade + 7} anos`)