// 1) Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 


var estudantes = [];
var aluno;
var quantidade = 0;


while (true) {
    aluno = prompt("Insira o nome do estudante (para encerrar, digite 'Pare'):  ").toLowerCase();

    if (aluno === "pare") {

        break;

    }

    estudantes.push(aluno);
    quantidade++;

}


alert(quantidade + " Estudantes foram cadastrados.");
document.write(estudantes.join(", "));