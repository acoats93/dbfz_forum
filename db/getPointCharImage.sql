SELECT c.char_image FROM users u
INNER JOIN characters c ON u.point_char_id = c.char_id
WHERE u.user_id = $1