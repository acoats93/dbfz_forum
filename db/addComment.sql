INSERT INTO comments (user_id, comment_content)
VALUES ($1, $2);

SELECT * FROM comments