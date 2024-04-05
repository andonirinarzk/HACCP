class LotController {
    static async getAllLots(req, res) {
        try {
            const lots = await Lot.findAll();
            res.json(lots);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async createLot(req, res) {
        try {
            const lot = await Lot.create(req.body);
            res.status(201).json(lot);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }
}

export default LotController;
