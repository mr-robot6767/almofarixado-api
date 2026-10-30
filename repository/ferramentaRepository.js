const ferramentas = [];

 export function cadastrar(ferramenta) {
    ferramentas.push(ferramenta);
}

export function listar() {
    return ferramentas;
}

export function buscarPorIndice(indice) {
    return ferramentas[indice]
}

export function atualizar(indice, ferramenta) {
    ferramentas[indice] = ferramenta;
}


export function deletar(indice) {
    ferramentas.splice(indice, 1);
}
