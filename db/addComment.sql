INSERT INTO comments (user_id, comment_content, username)
VALUES ($1, $2, $3);

SELECT * FROM comments