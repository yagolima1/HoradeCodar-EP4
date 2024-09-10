 // 2) Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta. Verifique se o planeta que o usuário informou está na array e informe ao usuário.

 const planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno", "terra", "marte", "plutão", "vênus", "júpiter", "saturno", "Plutao", "Venus", "Jupiter", "plutao", "venus", "jupiter"];

 var nomePlaneta = prompt("Digite o nome de um planeta: ");

 if (planetas.includes(nomePlaneta)){

     alert("O Planeta que você inseriu foi: " + nomePlaneta)

 }

 else {

     alert("Planeta Inválido! Tente Novamente.");

 }