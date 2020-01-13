module.exports = {
    getAllCharacters: async () => {
        const db = req.app.get('db');
        const allCharacters = db.getAllCharacters();
        res.status(200).json(allCharacters);
    }
}