module.exports = {
    addCharacter: async (req,res) => {
        const db = req.app.get('db');
        const {char_name, char_description, char_sp_moves, char_combos, char_advanced_combos, char_image} = req.body;
        const newCharacter = await db.addCharacter(char_name, char_description, char_sp_moves, char_combos, char_advanced_combos, char_image);
        res.status(200).json(newCharacter);
    },
    editCharacter: async (req,res) => {
        const db = req.app.get('db');
        const {char_id} = req.params
        const {char_name, char_description, char_sp_moves, char_combos, char_advanced_combos, char_image} = req.body;
        const updatedCharacter = await db.editCharacter(char_id, char_name, char_description, char_sp_moves, char_combos, char_advanced_combos, char_image);
        res.status(200).json(updatedCharacter);
    },
    deleteCharacter: async (req,res) => {
        const db = req.app.get('db');
        const {char_id} = req.params;
        const deletedCharacter = await db.deleteCharacter(char_id);
        res.status(200).json(deletedCharacter);
    }
}