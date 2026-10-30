import express from 'express';
import { cadastrarFerramenta, listarFerramentas, atualizarFerramenta, deletarFerramenta, buscarFerramentaPorIndice } from '../controller/ferramentaController.js';

const router = express.Router();

router.post('/', cadastrarFerramenta);
router.get('/', listarFerramentas);
router.get('/:indice', buscarFerramentaPorIndice);
router.patch('/:indice', atualizarFerramenta);
router.delete('/:indice', deletarFerramenta);

export default router;
    