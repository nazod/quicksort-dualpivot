function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

function swap(array, i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

async function dualPivotQuickSort(array, low, high){
    if(low< high){
        let piv = [];
        piv = dividir(array, low, high);

         dualPivotQuickSort(array, low, piv[0] - 1);
         dualPivotQuickSort(array, piv[0] + 1, piv[1]);
         dualPivotQuickSort(array, piv[1] + 1, high);
    }
}

function dividir(array, low, high){
    if(array[low] > array[high])
        swap(array, low, high);

    let j = low + 1;
    let g = high - 1;
    let k = low + 1;
    let p = array[low];
    let q = array[high];

    while(k<=g){

        if(array[k]< p){
            swap(array, k, j)
            j++;
        }else if(array[k] >= q){
            while(array[g] > q && k <g){
                g--;
            }

            swap(array, k, g);
            g--;

            if(array[k] < p){
                swap(array, k, j);
                j++;
            }

        }
        k++;

    }
    j--;
    g++;

    swap(array, low, j);
    swap(array, high, g);

    return [j, g];
}

console.time("DualPivot");
//Array com itens pre definidos
let array = [24, 8, 42, 75, 29, 77, 38, 57 ]
//Array com itens randomicos
let itensRandom = []

for(let i = 0; i < 10000000; i++){
    itensRandom[i] = getRandom(10000000);
}

dualPivotQuickSort(itensRandom, 0, itensRandom.length - 1);

console.log(itensRandom);
console.timeEnd("DualPivot");