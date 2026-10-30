import express from 'express';
import { cadastrarColaborador, listarColaboradores, atualizarColaborador, deletarColaborador, buscarColaboradorPorIndice } from '../controller/colaboradorController.js';

const router = express.Router();

router.post('/', cadastrarColaborador);
router.get('/', listarColaboradores);
router.get('/:indice', buscarColaboradorPorIndice);
router.patch('/:indice', atualizarColaborador);
router.delete('/:indice', deletarColaborador);

export default router;