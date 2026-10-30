import express from 'express';
import FerramentaRoutes from './routes/ferramentaRoutes.js';
import ColaboradorRoutes from './routes/colaboradorRoutes.js';

const app = express();

app.use(express.json());
app.use('/ferramentas', FerramentaRoutes);
app.use('/colaboradores', ColaboradorRoutes);

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});