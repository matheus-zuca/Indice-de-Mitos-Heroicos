//Definição de variaveis
var questoes = [{
            "ID": "1",
            "Questao": "Eu reúno informações sem formar juízos.",
            "Arquetipo": "Sábio",
            "Nota": "0"
        },{
            "ID": "2",
            "Questao": "Sinto-me desorientado(a) por causa de tantas mudanças na minha vida",
            "Arquetipo": "Destruidor",
            "Nota": "0"
        },{
            "ID": "3",
            "Questao": "O processo da minha autocura permite que eu ajude a curar os outros.",
            "Arquetipo": "Mago",
            "Nota": "0"
        },{
            "ID": "4",
            "Questao": "Eu humilho os outros",
            "Arquetipo": "Destruidor",
            "Nota": "0"
        },{
            "ID": "5",
            "Questao": "Sinto-me seguro(a)",
            "Arquetipo": "Inocente",
            "Nota": "0"
        },{
            "ID": "6",
            "Questao": "Deixo o medo de lado e faço o que precisa ser feito.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "7",
            "Questao": "Ponho as necessidades dos outros na frente das minhas.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "8",
            "Questao": "Procuro ser autêntico(a) onde quer que eu esteja.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "9",
            "Questao": "Quando a vida fica monótona, gosto de fazer uma mudança radical.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "10",
            "Questao": "Tenho prazer em cuidar das outras pessoas.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Os outros me acham divertido(a).",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Sinto - me sexy.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Acredito que as pessoas não querem realmente magoar as outras.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Quando criança, eu era ludibriado(a) ou neglicenciado(a).",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Gosto mais de dar que de receber.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Concordo com a seguinte afirmação: 'É melhor Ter amado e perdido o objetivo desse amor do que nunca Ter amado'.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Vivo a vida plenamente.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Mantenho um senso de perspectiva procurando Ter uma visão de longo alcance.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Estou empenhado(a) no processo de criar a minha própria vida.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Acredito que uma mesma coisa pode ser considerada a partir de diferentes ângulos.",
            "Arquetipo": "",
            "Nota": "0"
        },        {  
			"ID": "",
            "Questao": "Não sou mais a pessoa que pensava ser.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "A vida é um rosário de tristezas.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "A ajuda espiritual é responsável pela minha eficiência.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Acho mais fácil fazer as coisas para os outros do que para mim mesmo(a).",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Encontro satisfação nos meus relacionamentos.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "As pessoas me procuram em busca de orientação.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Tenho medo das pessoas que ocupam posições de mando.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Não levo as regras muito a sério.",
            "Arquetipo": "",
            "Nota": "0"
        },        {
            "ID": "",
            "Questao": "Gosto de ajudar as pessoas a estabelcerem contato.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Sinto-me abandonado(a). ",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Às vezes consigo realizar coisas importantes aparentemente sem esforço.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tenho capacidade de liderança.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Procuro sempre me aperfeiçoar.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Posso contar com outras pessoas para cuidarem de mim.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Prefiro estar no comando das situações.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Procuro descobrir a verdade que está por trás das aparências.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "A modificação de meus pensamentos altera a minha vida.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Eu estimulo o desenvolvimento dos recursos, sejam eles humanos ou naturais.",
            "Arquetipo": "",
            "Nota": "0"
        },{
            "ID": "",
            "Questao": "Estou disposto a correr riscos pessoais para defender as idéias nas quais acredito.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Não consigo ficar sentado e deixar que uma injustiça seja cometida sem tentar corrigi-la.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Eu me esforço por ser objetivo(a). ",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Minha presença muitas vezes atua como um catalisador para a realização de mudanças.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Gosto de fazer as pessoas rirem.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tenho disciplina para alcançar as minhas metas.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Amo a humanidade como um todo. ",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tenha a capacidade de combinar as habilidades das pessoas com as tarefas a serem realizadas.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "A manutenção da minha independência é fundamental para mim.",
            "Arquetipo": "",
            "Nota": "0"
        },
        {
            "ID": "",
            "Questao": "Acredito que todas as pessoas e todas as coisas do mundo estão interligadas.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "O mundo é um lugar seguro.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "As pessoas em quem confiei me abandonaram.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Sinto certa inquietação.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Estou renunciando às coisas que não servem mais para mim.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Gosto de 'alegrar' as pessoas que são excessivamente sérias.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Um pouco de bagunça é bom para a alma.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "O fato de Ter me sacrificado para ajudar os outros fez de mim uma pessoa melhor.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Sou uma pessoa calma. ",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Costumo enfrentar as pessoas hostis. ",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Gosto de transformar as situações. ",
            "Arquetipo": "",
            "Nota": "0"
        },
        {
            "ID": "",
            "Questao": "A chave para o sucesso, em todos os aspectos da vida, é a disciplina.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "A inspiração vem facilmente para mim.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Não estou à altura das expectativas que tinha para mim mesmo(a).",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tenho a sensação de que um mundo melhor está à minha espera em alguma lugar.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Quando conheço uma pessoa presumo que ela é digna de confiança.",
            "Arquetipo": "",
            "Nota": "0"
        },
        {
            "ID": "",
            "Questao": "Meus sonhos estão se transformando em realidade.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Sei que as minhas necessidades serão supridas.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tenho vontade de realizar algum tipo de ruptura.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Procuro administrar as situações tendo em mente o bem geral.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Sinto dificuldade para dizer não.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tenho mais idéias boas do que tempo para transformá-las em realidade.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Estou procurando melhorar a minha vida.",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "Tive decepções com pessoas que foram importantes na minha vida",
            "Arquetipo": "",
            "Nota": "0"
        }, {
            "ID": "",
            "Questao": "O ato de procurar alguma coisa é tão importante quanto encontrá-la",
            "Arquetipo": "",
            "Nota": "0"
        }
]
var tela = document.getElementById("tela");


function CriarPergunta(id, pergunta){
	let texto = `<tr><td colspan=5>${pergunta}</td></tr><tr>`;
	for(var i = 0; i<5;i++){
		texto += `<td><input type="radio" id="Q_${id}_${i+1}" name="Pergunta${id}" value="${i+1}"></td>`;
	}
	
	texto += `</tr>`;
	
	return texto;
}

function Render(texto){
	tela.innerHTML = texto;
}

function Teste(){
	let texto = `<table>`;
	
	for(var i = 0;i < 10;i++){
		texto += CriarPergunta(questoes[i].ID, questoes[i].Questao);
	}
	
	texto += `<tr><td colspan=2><input type="button" value = "Anterior" onClick="Anterior()"></td>
	<td></td>
	<td colspan=2><input type="button" value = "Próxima" onClick="Proxima()"></td></tr></table>`
	
	return texto;
}

function Proxima(){
	alert("Tá funcionando sim");
}

function Anterior(){
	alert("Tá funcionando sim");
}

function ColetaDeRespostas(){
	
}

Render(Teste());