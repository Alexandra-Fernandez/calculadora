var operadores = parseInt(prompt("Elegir un alternativa: \n "  +
                        "1. Suma \n " +
                        "2. Resta \n " +
                        "3. Multiplicación \n " +
                        "4. División \n " +
                        "5. Resto/Módulo \n " +
                        "6. Menor que \n " +
                        "7. Mayor que \n " +
                        "8. Menor o igual que \n " +
                        "9. Mayor o igual que"));

var numero1 = parseInt(prompt("primero número"));
var numero2 = parseInt(prompt("segundo número"));

switch (operadores) {
    case 1 :
        var suma = numero1 + numero2 ;
        window.alert(suma);
        break;
    case 2 :
        var resta = numero1 - numero2 ;
        window.alert(resta);
        break;
    case 3 :
        var multiplicación = numero1 * numero2 ;
        window.alert(multiplicación);
        break;
    case 4 :
        var división = numero1 / numero2 ;
        window.alert(división);
        break;
    case 5 :
        var resto = numero1 % numero2 ;
        window.alert (resto);
        break;
    case 6 :
        var menorQue = numero1 < numero2 ;
        window.alert(menorQue)
        break;
    case 7 :
        var mayorQue = numero1 > numero2 ;
        window.alet(mayorQue);
        break;
    case 8 :
        var menorIgualQue = numero1 <= numero2 ;
        window.alert(menorIgualQue);
        break;
    case 9 : 
        var mayorIgualQue = numero1 >= numero2 ;
        window.alert(mayorIgualQue)
        break;
    default:
        window.alert("No es una opción")
        break;
}