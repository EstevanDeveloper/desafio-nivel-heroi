const nome = "cavaleiro"
let xp 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual é o seu nome? ", function(nomeUsuario) {
    rl.question("Quanto XP você tem? ", function(xpInput) {
        let xp = parseInt(xpInput); // Converte a entrada para número
        let nivel = "Ferro"; // Padrão inicial

        if (xp >= 1001 && xp <= 2000) {
            xp = "Bronze";
        } else if (xp >= 2001 && xp <= 6000) {
            xp = "Prata";
        } else if (xp >= 6001 && xp <= 7000) {
            xp = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            xp = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            xp = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            xp = "Imortal";
        } else if (xp >= 10001) {
            xp = "Radiante";
        }

        console.log(`O herói de nome ${nomeUsuario} está no nível ${xp}`);

        rl.close();
    });
});
