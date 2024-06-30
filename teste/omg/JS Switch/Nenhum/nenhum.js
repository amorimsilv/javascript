let fruits = " "

switch(fruits) {
    case "Banana":
      console.log("Opção Banana")
      break;
    case "Maça":
      console.log("Opção Maça")
      break;
    default:
      console.log("Nenhum dos dois!");
  }

  // o Script é lido da seguinte forma: SE, o let fruits, for "banana", ira chamar a mensagem "Opção Banana"
  // SE, o let fruits, for "maça", ira chamar a mensagem "Opção Maça"
  // SE, o let fruits, tiver vazio, ou não tiver nem banana, nem maça, ira chamar a mensagem "Nenhum dos dois!"