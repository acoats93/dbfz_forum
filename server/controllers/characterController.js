module.exports = {
    getAllCharacters: async (req, res) => {
        const db = req.app.get('db');
        const allCharacters = await db.getAllCharacters();
        res.status(200).json(allCharacters);
    }
}