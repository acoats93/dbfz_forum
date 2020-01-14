UPDATE comments
SET user_id = $2,
char_id = $3,
comment_date = $4,
comment_content = $5
WHERE comment_id = $1;

SELECT * FROM comments