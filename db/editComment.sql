UPDATE comments
SET user_id = $2,
comment_content = $3
WHERE comment_id = $1;

SELECT * FROM comments