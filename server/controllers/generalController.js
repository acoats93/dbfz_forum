module.exports = {
    getAllTerms: async (req, res) => {
        const db = req.app.get('db');
        const allTerms = await db.getAllTerms();
        res.status(200).json(allTerms);
    }
}