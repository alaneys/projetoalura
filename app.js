console.log("dados"); // Exibe "dados" no console

// Obtém os elementos necessários
let section = document.getElementById("resultados-pesquisa"); // Elemento onde os resultados serão exibidos
let campoPesquisa = document.getElementById("campo-pesquisa"); // Campo de pesquisa

// Adiciona o evento de submit no formulário
let form = document.getElementById("formPesquisa");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar o recarregamento da página

    // Obtém o valor digitado na caixa de pesquisa e converte para minúsculas
    let termoPesquisa = campoPesquisa.value.toLowerCase();

    // Limpa o conteúdo de resultados anteriores
    section.innerHTML = "";

    // Verifica se o campo de pesquisa está vazio
    if (termoPesquisa === "") {
        // Se vazio, exibe todos os filmes
        dados.forEach(dado => {
            let divFilme = document.createElement("div");
            divFilme.classList.add("filme");
            divFilme.innerHTML = `
                <h2>${dado.titulo}</h2>
                <p>${dado.descricao}</p>
            `;
            section.appendChild(divFilme);
        });
    } else {
        // Se há termo de pesquisa, filtra os filmes
        let resultadosEncontrados = false;
        dados.forEach(dado => {
            let titulo = dado.titulo.toLowerCase();
            let descricao = dado.descricao.toLowerCase();

            // Verifica se o título ou descrição contém o termo de pesquisa
            if (titulo.includes(termoPesquisa) || descricao.includes(termoPesquisa)) {
                let divFilme = document.createElement("div");
                divFilme.classList.add("filme");
                divFilme.innerHTML = `
                    <h2>${dado.titulo}</h2>
                    <p>${dado.descricao}</p>
                `;
                section.appendChild(divFilme);
                resultadosEncontrados = true;
            }
        });

        // Se não houver resultados, exibe uma mensagem
        if (!resultadosEncontrados) {
            section.innerHTML = "<p>Nenhum filme encontrado.</p>";
        }
    }
});





