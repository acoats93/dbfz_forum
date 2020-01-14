module.exports = {

    addComment: async (req,res) => {
        const db = req.app.get('db');
        const {user_id, char_id, comment_date, comment_content} = req.body;
        const newComment = await db.addComment(user_id, char_id, comment_date, comment_content);
        res.status(200).json(newComment);
    },
    editComment: async (req,res) => {
        const db = req.app.get('db');
        const {comment_id} = req.params
        const {user_id, char_id, comment_date, comment_content} = req.body;
        const updatedComment = await db.editComment(comment_id, user_id, char_id, comment_date, comment_content);
        res.status(200).json(updatedComment);
    },
    deleteComment: async (req,res) => {
        const db = req.app.get('db');
        const {comment_id} = req.params;
        const deletedComment = await db.deleteComment(comment_id);
        res.status(200).json(deletedComment);
    }
}