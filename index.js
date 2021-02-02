// Arreglos que contienen los valores que se muestran en el medio de la carta
let cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",];
// Simbolos de la carta, se va a concatenar para crear una clase
let cardSymbol = ["heart", "club", "spade", "diamond"];
arrayValue = [];
arraySymbol = [];

//BOTONES
// Botón que genera una cantidad(determinada en el input) de cartas con valores y símbolos al azar.
document.getElementById("drawBtn").addEventListener("click", function () {
    document.getElementById("card-container").innerHTML = "";
    document.getElementById("card-log-container").innerHTML = "";
    let cantidad = document.getElementById("amountInput").value;


    // Array Auxiliar utilizado para hacer un log de los valores generados
    let auxValue = [];
    let auxSymbol = [];

    for (i = 0; i < cantidad; i++) {
        // Genera numero random para utilizar como indice
        let valueIndex = Math.floor(Math.random() * 13);
        let symbolIndex = Math.floor(Math.random() * 4);
        // Llama a la función renderCards(); enviando valores generados al azar
        document.getElementById("card-container").innerHTML += renderCards(cardValue[valueIndex], cardSymbol[symbolIndex]);
        auxValue.push(valueIndex);
        auxSymbol.push(symbolIndex);
    }
    // Toma las variables globales y mete los valores para poder utilizarlos en otra función
    arrayValue = auxValue;
    arraySymbol = auxSymbol;
});

// Botón que ordena las cartas según su valor 
document.getElementById("sortBtn").addEventListener("click", function () {
    document.getElementById("card-log-container").innerHTML = "";
    bubbleSort(arrayValue, arraySymbol)
});

document.getElementById("selectBtn").addEventListener("click", function () {
    document.getElementById("card-log-container").innerHTML = "";
    selectSort(arrayValue, arraySymbol)
});

//FUNCIONES
// Función recibe parámetros del evento drawBtn y genera las cartas con sus respectivos valores
function renderCards(value, icon) {
    return `<div class="card-wrapper">
                <div class="card">
                    <div class="top-card">
                        <span class="card-${icon}"></span>
                    </div>
                    <div class="middle-card">
                        <span class="middle-number">${value}</span>
                    </div>
                    <div class="bottom-card">
                        <span class="card-${icon}"></span>
                    </div>
                </div>
            </div>`;
}

// BUBBLESORT ORDENA CARTAS
const bubbleSort = (arr, arr2) => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
        let index = 0;
        let index2 = 0;
        while (index < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            if (arr[index] > arr[index + 1]) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;

                let aux2 = arr2[index2];
                arr2[index2] = arr2[index2 + 1];
                arr2[index2 + 1] = aux2;
            }
            index++;
            index2++;
        }
        wall--; //decrease the wall for optimization
    }
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("card-log-container").innerHTML += renderCards(cardValue[arr[i]], cardSymbol[arr2[i]]);
    }
};

// SELECT SORT ORDENA CARTAS
const selectSort = (arr, arr2) => {
    document.getElementById("card-log-container").innerHTML = "";
    let min = 0;
    while (min < arr.length - 1) {
        for (let i = min + 1; i < arr.length; i++) {
            if (arr[min] > arr[i]) {
                let aux = arr[min];
                arr[min] = arr[i];
                arr[i] = aux;

                //array 2
                let aux2 = arr2[min];
                arr2[min] = arr2[i];
                arr2[i] = aux2;
            }
        }
        min++;
    }
    for (let i = 0; i < arr.length; i++) {
        document.getElementById("card-log-container").innerHTML += renderCards(cardValue[arr[i]], cardSymbol[arr2[i]]);
    }
};