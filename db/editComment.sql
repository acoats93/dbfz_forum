UPDATE comments
SET user_id = $2,
char_id = $3,
comment_content = $4
WHERE comment_id = $1;

SELECT * FROM comments