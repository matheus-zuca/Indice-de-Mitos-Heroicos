//Definição de variaveis
var questoes = [
{
	"ID": "1",
	"Questao": "Eu reúno informações sem formar juízos.",
	"Arquetipo": "Sábio",
	"Nota": "0"
},
{
	"ID": "2",
	"Questao":"Sinto-me desorientado(a) por causa de tantas mudanças na minha vida",
	"Arquetipo": "Destruidor",
	"Nota":"0"
},
{
	"ID": "3",
	"Questao": "O processo da minha autocura permite que eu ajude a curar os outros.",
	"Arquetipo": "Mago",
	"Nota":"0"
},
{
	"ID": "4",
	"Questao": "Eu humilho os outros",
	"Arquetipo": "Destruidor",
	"Nota":"0"
},
{
	"ID": "5",
	"Questao": "Sinto-me seguro(a)",
	"Arquetipo": "Inocente",
	"Nota":"0"
}/*,
{
	"ID": "6"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "7"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "8"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "9"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "10"
	"Questao":
	"Arquetipo":
	"Nota":
},
{
	"ID": "11"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "12"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "13"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "14"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "15"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "16"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "17"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "18"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "19"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "20"
	"Questao":
	"Arquetipo":
	"Nota":
},
{
	"ID": "21"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "22"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "23"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "24"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "25"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "26"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "27"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "28"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "29"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "30"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "31"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "32"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "33"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "34"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "35"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "36"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "37"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "38"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "39"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "40"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "41"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "42"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "43"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "44"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "45"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "46"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "47"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "48"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "49"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "50"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "51"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "52"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "53"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "54"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "55"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "56"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "57"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "58"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "59"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "60"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "61"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "62"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "63"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "64"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "65"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "66"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "67"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "68"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "69"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "70"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "71"
	"Questao":
	"Arquetipo":
	"Nota":
},{
	"ID": "72"
	"Questao":
	"Arquetipo":
	"Nota":
}
*/]

var tela = document.getElementById("tela");

function CriarPergunta(id, pergunta){
	let texto = `<tr><td colspan=5>${pergunta}</td></tr><tr>`;
	for(var i = 0; i<5;i++){
		texto += `<td><input type="radio" id="Q_${id}_${i+1}" name="Pergunta${id}"></td>`;
	}
	
	texto += `</tr>`;
	
	return texto;
}

function Render(texto){
	tela.innerHTML = texto;
}

function Teste(){
	let texto = `<table>`;
	
	for(var i = 0;i < 5;i++){
		texto += CriarPergunta(questoes[i].ID, questoes[i].Questao);
	}
	
	texto += `</table>`
	
	return texto;
}

Render(Teste());