const bcrypt = require('bcrypt');

module.exports = {
    register:  async (req,res) => {
        const db = req.app.get('db');
        const {username, password, is_admin} = req.body;
        const foundUser = await db.checkForUsername(username);

        if(foundUser[0]){
            res.status(409).json({message: "Username taken. Try a new one"})
        }else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = await db.registerUser(username, hash, is_admin);

            req.session.user = {
                user_id: newUser[0].user_id,
                username: newUser[0].username,
                is_admin: newUser[0].is_admin
            }
            res.status(200).json(req.session.user);
        }

    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const foundUser = await db.checkForUsername(username);
        
        if(!foundUser[0]){
            res.status(409).json({message: "Account Non-existent. Please make an account."})
        }else{
            const authUser = bcrypt.compareSync(password, foundUser[0].hash);

            if(!authUser){
                res.status(403).json({message: "Username or Password Incorrect. Please Try Again"})
            }else{
                req.session.user = {
                    user_id: foundUser[0].user_id,
                    username: foundUser[0].username,
                    is_admin: foundUser[0].is_admin,
                    point_char_id: foundUser[0].point_char_id,
                    mid_char_id: foundUser[0].mid_char_id,
                    anchor_char_id: foundUser[0].anchor_char_id
                }
                res.status(200).json(req.session.user);
            }
        }
    },

    logout: (req,res) => {
        req.session.destroy();
        res.status(200).json({message: "Log Out Successful"})
    },

    getUser: (req,res) => {
        res.status(200).json(req.session.user);
    },

    addUserCharacters: async (req, res) => {
        const db = req.app.get('db');
        const {point_char_id, mid_char_id, anchor_char_id} = req.body;
        const {user_id} = req.params;
        const userCharacters = await db.addUserCharacters(point_char_id,mid_char_id,anchor_char_id, user_id);
        res.status(200).json(userCharacters);
    },

    getPointImages: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.body;
        const pointCharacter = await db.getPointCharImage(user_id);
        res.status(200).json(pointCharacter[0].char_image);
    },

    getMidImages: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.body;
        const midCharacter = await db.getMidCharImage(user_id);
        res.status(200).json(midCharacter[0].char_image);
    },

    getAnchorImages: async (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.body;
        const anchorCharacter = await db.getAnchorCharImage(user_id);
        res.status(200).json(anchorCharacter[0].char_image);
    }
}