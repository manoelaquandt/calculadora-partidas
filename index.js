//Função que calcula o nível do jogador com base nas vitórias e derrotas
function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Ranqueadas
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível com base nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retorna o resultado
    return { saldoVitorias, nivel };
}

// Exemplo de uso da função
const vitorias = 75;
const derrotas = 20;
const resultado = calcularNivel(vitorias, derrotas);

// Exibe a mensagem
console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
