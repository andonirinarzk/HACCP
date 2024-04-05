import bodyParser from 'body-parser';
import express from 'express';
import lotRoutes from './routes/lotRoutes.js';
const app = express();
const port = 3000;

// Middleware pour le parsing du body en JSON
app.use(bodyParser.json());

// Importez les routes ici

app.use('/lots', lotRoutes);

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});
