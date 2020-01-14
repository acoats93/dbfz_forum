INSERT INTO comments (user_id, char_id, comment_date, comment_content)
VALUES ($1, $2, $3, $4);

SELECT * FROM comments