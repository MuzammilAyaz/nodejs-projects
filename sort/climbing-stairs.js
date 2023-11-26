const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter the number:', async (data) => {
    console.log(await findThePossibility(data))
})

async function findThePossibility(n) {
   return (n-1) + (n-2)
}