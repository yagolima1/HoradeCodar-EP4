        // 3) Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas. Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista". Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado". Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".

        const frutas = ["Laranja", "Limão", "Maçã", "Banana", "Abacaxi", "Uva", "Melancia", "Melão", "Pera", "Caju" ];
    
        
        console.log("Estoque: " + frutas.length);
        
        while (frutas.length > 0) {
        alert("Frutas à venda: " + frutas.join(", "));

        var selecao = prompt("Digite uma Fruta: ");

        var index = frutas.indexOf(selecao); // encontrando posição de um elemento

        if (index !== -1){

            frutas.splice(index, 1);
            alert("Fruta Válida! Retirada da Lista.")

        }

        else {

            alert("Lamento, não possuímos esta fruta em nosso mercado.  D: ")

        }

    }

    alert("Lista de compras finalizada  :D ");