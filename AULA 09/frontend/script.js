
//============================================
// ELEMENTOS HTML
//============================================

const dogImage = document.getElementById("dogImage");
//nome raça
const dogBreed = document.getElementById("dogBreed");
//cachorro aleatório
const randomBtn = document.getElementById("randomDogButton");
//botao que busca por raça
const searchBtn = document.getElementById("searchBtn");
//campo de input para digitar a raça
const breedInput = document.getElementById("breedInput");
//area onde fica a imagem do cachorro
//usamos querySelector para selecionar o elemento com a classe "dog-area"
const dogArea = document.querySelector(".dog-area");

//============================================
// URL DA API
//============================================

const API = "http://localhost:3000/api/cachorros";

//============================================
// FUNÇÃO PRINCIPAL
//============================================

async function buscaCachorro(url) {
    //adiciona a classe "loading"
    //normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading");

    try {
        //faz a requisição HTTP para a API
        const response = await fetch(url);
        // converte a resposta para JSON
        const data = await response.json();
        //mostra no console a resposta da API
        console.log("Resposta da API:", data);

        // Vamos verificar se a resposta da API retornou erro
        if (data.status === "error") {
            //mostra a mensagem de erro no console
            //breedName - Elemento HTML 
            //.textContent - Propriedade que define o conteúdo de texto do elemento
            //data - objeto retornado pela API
            //.message - propriedade que contem a mensagem ou URL
            breedName.textContent = data.message;
            // Remove a imagem
            dogImage.src = "";
            //execução da função
               //return

             //coloca a imagem do cachorro na tela
             // o src define qual imagem será exibida
             dogImage.src = data.message;

             //extrai o nome da raça da URL da imagem
             // exemplo da URL:
             // http://localhost:3000/fotos/husky/1.jpg
             // separa a URL em partes usando "/"
             const partes = data.message.split("/")

             //pega a posição 5 do array
             // que corresponde ao nome da raça
             const raca = partes [5]

             //coloca a primeira letra maiscula
             // ex: husky --> Husky

             breedName.textContent =
             // raca.charAt(0) - pega a primeira letra
             // toUpperCse() - Transforma em maiuscula
             // raca.slice(1) - pega o texto a partir da segunda letra
             raca.chartAt(0).toUpperCase () + raca.slice(1);

        } cath (erro);
            //caso o servidor esteja desligado
            // ou aconteça algum erro na requisição

            console.error(erro);

            //mostra a mensagem na tela
            breedName.texteContent =
            "📳 servidor offline - rode : node server.js"

            //remove a imagem
            dogImage.src = ""
        } finally {
            //remove a classe de carregamento
            //independentemente de erro ou sucesso
            dogArea.classList.remove("loading")

        }
    }