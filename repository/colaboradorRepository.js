const colaboradores = [];

 export function cadastrar(colaborador) {
    colaboradores.push(colaborador);
}

export function listar() {
    return colaboradores;
}

export function buscarPorIndice(indice) {
    return colaboradores[indice]
}

export function atualizar(indice, colaborador) {
    colaboradores[indice] = colaborador;
}


export function deletar(indice) {
    colaboradores.splice(indice, 1);
}
