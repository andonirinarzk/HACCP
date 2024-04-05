import express from 'express';
import LotController from '../controllers/lotController.js';
const router = express.Router();

// Définir les routes pour les opérations CRUD sur les lots
router.get('/', LotController.getAllLots);
router.post('/', LotController.createLot);
// Plus de routes pour la mise à jour, la suppression, etc.

export default router;