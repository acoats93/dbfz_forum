module.exports = {
    getAllTerms: (req, res) => {
        const db = req.app.get('db');
        const allTerms = db.getAllTerms();
        res.status(200).json(allTerms);
    }
}