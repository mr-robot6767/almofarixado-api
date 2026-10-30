import {Colaborador} from '../model/Colaborador.js';
import { cadastrar, atualizar, deletar, listar, buscarPorIndice } from '../repository/colaboradorRepository.js';

export function cadastrarColaborador(req, res) {
    const { nome, matricula, setor } = req.body;
    const colaborador = new Colaborador(nome, matricula, setor);
    cadastrar(colaborador);
    res.status(201).json({ mensagem: 'Colaborador cadastrado com sucesso!' });
}

export function listarColaboradores(req, res) {
    const colaboradores = listar();
    res.status(200).json(colaboradores);
}

export function buscarColaboradorPorIndice(req, res) {
    const indice = Number(req.params.indice);
    const colaborador = buscarPorIndice(indice);
    if (!colaborador) {
        return res.status(404).json({ mensagem: 'Colaborador não encontrado!' });
    }
    res.status(200).json(colaborador);
}

export function atualizarColaborador(req, res) {
    const indice = Number(req.params.indice);
    const colaborador = buscarPorIndice(indice);

    if (!colaborador) {
        return res.status(404).json({ mensagem: 'Colaborador não encontrado!' });
    }

    const { nome, matricula, setor } = req.body;

    if (nome != undefined) {
        colaborador.nome = nome;
    }
    if (matricula != undefined) {
        colaborador.matricula = matricula;
    }
    if (setor != undefined) {
        colaborador.setor = setor;
    }
    if (descricao != undefined) {
        ferramenta.descricao = descricao;
    }

    atualizar(indice, colaborador);
    return res.status(200).json({ mensagem: 'Colaborador atualizado com sucesso!' });
}

export function deletarColaborador(req, res) {
    const indice = Number(req.params.indice);
    const colaborador = buscarPorIndice(indice);
    if (!colaborador) {
        return res.status(404).json({ mensagem: 'Colaborador não encontrado!' });
    }
    deletar(indice);
    res.status(200).json({ mensagem: 'Colaborador deletado com sucesso!' });
}