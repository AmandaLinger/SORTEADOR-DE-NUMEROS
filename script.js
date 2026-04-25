
function sortear(){
    let qntNumero = parseInt(document.getElementById('qntNumero').value);
    let inicioNumero = parseInt(document.getElementById('inicioNumero').value);
    let finalNumero = parseInt(document.getElementById('finalNumero').value);
    let btnRepeticao = document.getElementById('btnRepeticao').checked;

    if (isNaN(qntNumero) || isNaN(inicioNumero) || isNaN(finalNumero)) {
        window.alert('Preencha todos os campos!');
        return false; // Impede navegação
    } else if (inicioNumero > finalNumero) {
        window.alert('O número de início deve ser menor que o número final');
        return false; // Impede navegação
    } else {
        let numerosSorteados = [];
        
        if (btnRepeticao) {
            // Com repetição: pode sortear o mesmo número mais de uma vez
            for (let i = 0; i < qntNumero; i++) {
                let num = Math.floor(Math.random() * (finalNumero - inicioNumero + 1)) + inicioNumero;
                numerosSorteados.push(num);
            }
        } else {
            // Sem repetição: não pode ter números duplicados
            if (qntNumero > (finalNumero - inicioNumero + 1)) {
                window.alert('Quantidade maior que o intervalo possível!');
                return false; // Impede navegação
            }
            while (numerosSorteados.length < qntNumero) {
                let num = Math.floor(Math.random() * (finalNumero - inicioNumero + 1)) + inicioNumero;
                if (!numerosSorteados.includes(num)) {
                    numerosSorteados.push(num);
                }
            }
        }
        
        console.log(numerosSorteados);
        
        // Armazena o resultado para a próxima página
        localStorage.setItem('numerosSorteados', JSON.stringify(numerosSorteados));
        
        // Navega para a página de resultados APENAS se tudo estiver válido
        window.location.href = 'pageNum.html';
        return true;
    }
}