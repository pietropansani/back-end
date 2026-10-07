// JSON significa JavaScript Object Notation é um formato de representação e troca de dados.

JSON É COMO FICHA DE CADASTRO

FICHA FÍSICA:           JSON:
Nome: João              "nome":"João"
Idade: 25               "idade": 25
Cidade: SP              "cidade":"SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)

CONCEITO:
{
    "cachorro":{
        "nome": "Thor",
        "idade": 3,
        "raca": "Vira Lata",
        "vacinado": true,
        "peso": 25.5,
        "brinquedos": ["bola", "osso", "frisbee"],
        "dono": {
            "nome": "Pietro",
            "telefone": "11913450677"

        }
    }
}

<!-- ===================================== -->
EXPLICAÇÃO
<!-- ===================================== -->
// STRING (Texto) - Sempre com aspas
"nome": "Thor"

// NUMBER (Número) - Sem aspas
"idade": 3,
"peso": 25.5,

// BOOLEAN (true/false)
"vacinado": true,

// ARRAY (Lista) - com colchetes
"brinquedos": ["bola", "osso"]

// OBJECT (Objeto) - com chaves
"dono": {
    "nome": "João",
    "telefone": "11913450677"
}

// NULL (Vazio)
"dataFalecimento": null0