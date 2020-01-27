INSERT INTO comments (user_id, char_id, comment_content)
VALUES ($1, $2, $3);

SELECT * FROM comments