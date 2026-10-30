import {Ferramenta} from '../model/Ferramenta.js';
import { cadastrar, atualizar, deletar, listar, buscarPorIndice } from '../repository/ferramentaRepository.js';

export function cadastrarFerramenta(req, res) {
    const { codigo, estado, descricao } = req.body;
    const ferramenta = new Ferramenta(codigo, estado, descricao);
    cadastrar(ferramenta);
    res.status(201).json({ mensagem: 'Ferramenta cadastrada com sucesso!' });
}

export function listarFerramentas(req, res) {
    const ferramentas = listar();
    res.status(200).json(ferramentas);
}

export function buscarFerramentaPorIndice(req, res) {
    const indice = Number(req.params.indice);
    const ferramenta = buscarPorIndice(indice);
    if (!ferramenta) {
        return res.status(404).json({ mensagem: 'Ferramenta não encontrada!' });
    }
    res.status(200).json(ferramenta);
}

export function atualizarFerramenta(req, res) {
    const indice = Number(req.params.indice);
    const ferramenta = buscarPorIndice(indice);

    if (!ferramenta) {
        return res.status(404).json({ mensagem: 'Ferramenta não encontrada!' });
    }

    const { codigo, estado, descricao } = req.body;

    if (codigo != undefined) {
        ferramenta.codigo = codigo;
    }
    if (estado != undefined) {
        ferramenta.estado = estado;
    }
    if (descricao != undefined) {
        ferramenta.descricao = descricao;
    }

    atualizar(indice, ferramenta);
    return res.status(200).json({ mensagem: 'Ferramenta atualizada com sucesso!' });
}

export function deletarFerramenta(req, res) {
    const indice = Number(req.params.indice);
    const ferramenta = buscarPorIndice(indice);
    if (!ferramenta) {
        return res.status(404).json({ mensagem: 'Ferramenta não encontrada!' });
    }
    deletar(indice);
    res.status(200).json({ mensagem: 'Ferramenta deletada com sucesso!' });
}