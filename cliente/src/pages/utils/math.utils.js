export function randomArrayPick(arr){
    const copia = arr.map((valor, indice) => ({ valor, indice }));
    copia.sort(() => Math.random() - 0.5);
    const seleccionados = copia.slice(0, 3);
    return seleccionados.map(({ valor, indice }) => ({ valor, indice }));
}