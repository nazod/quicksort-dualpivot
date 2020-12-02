/*
    Trabalho de V2 - Um estudo obre o QuickSort e suas variações.
    Aluno: Gabriel Yan Nobre Ricarte
*/

//Função Auxiliares.
function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}


function swap(itens, leftIndex, rightIndex) {
    var temp = itens [leftIndex];
    itens [leftIndex] = itens [rightIndex];
    itens [rightIndex] = temp;
}

function dividir(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //Elemento do meio
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); 
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = dividir(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}

console.time("QuickSort");
//Array com itens pre definidos
let itens = [4, 7, 3, 1, 9, 6, 5, 2, 8, 0]
//Array com itens randomicos
let itensRandom = []

for(let i = 0; i < 10000000; i++){
    itensRandom[i] = getRandom(10000000);
}

//QuickSort
var sortedArray = quickSort(itensRandom, 0, itensRandom.length - 1);
console.log(itensRandom); //prints [2,3,5,6,7,9]
console.timeEnd("QuickSort");