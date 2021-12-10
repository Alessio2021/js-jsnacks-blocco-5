// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

// const zucchina = [{
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 20
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 20
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 20
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 20
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 20
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 13
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 13
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 13
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 13
// },
// {
//     varieta: 'media',
//     peso: 1,
//     lunghezza: 13
// }];


// let pesoTotale = 0;

// for (let i = 0; i < zucchina.length; i++) {
//     const element = zucchina[i]
//     pesoTotale += element.peso
// }
// console.log(pesoTotale);






// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
// const zucchinePiccole = [];
// const zucchineGrandi = [];

// for (let i = 0; i < zucchina.length; i++) {
//     const element = zucchina[i];
//     if (element.lunghezza < 15) {
//         zucchinePiccole.push(element)
//     } else {
//         zucchineGrandi.push(element)
//     }
// }
// console.log(zucchinePiccole, zucchineGrandi);

// let totSmall = 0;
// let totBig = 0;

// for (let i = 0; i < zucchinePiccole.length; i++) {
//     const element = zucchinePiccole[i];

//     totSmall += element.lunghezza;
// }

// for (let i = 0; i < zucchineGrandi.length; i++) {
//     const element = zucchineGrandi[i];

//     totBig += element.lunghezza;
// }

// console.log('totale zucchine piccole', totSmall, 'totale zucchine grandi', totBig);




// Scrivi una funzione che fonda due array(aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a, b, c], [1, 2, 3] →[a, 1, b, 2, c, 3].


const lettere = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mixed = mix(lettere, numeri);

function mix(array1, array2) {
    const final = [];
    for (let i = 0; i < 9; i++) {
        const element = array1[i];
        final.push(element);
        const elemen = array2[i];
        final.push(elemen);
    }
    return final
}
console.log(mixed);


