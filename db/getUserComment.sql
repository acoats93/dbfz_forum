SELECT u.username FROM users u
INNER JOIN comments c ON c.user_id = u.user_id
WHERE C.comment_id = $1;