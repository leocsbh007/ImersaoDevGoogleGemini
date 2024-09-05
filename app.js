function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let post of posts) {
        // Cria um novo elemento HTML para cada resultado
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${post.titulo}</a>
                </h2>
                <p class="descricao-meta">${post.descricao}</p>
                <p class="descricao-meta">${post.nivel}</p>
                <p class="descricao-meta">${post.data}</p>
                <a href=${post.git} target="_blank">Mais informações no Git Hub</a>
            </div>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

    console.log("Olá Mundo!!!")
}