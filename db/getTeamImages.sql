SELECT c1.char_image FROM users u
INNER JOIN characters c1 ON u.point_char_id = c1.char_id
WHERE user_id = $1
UNION
SELECT c1.char_image FROM users u
INNER JOIN characters c1 ON u.mid_char_id = c1.char_id
WHERE user_id = $1
UNION
SELECT c1.char_image FROM users u
INNER JOIN characters c1 ON u.anchor_char_id = c1.char_id
WHERE user_id = $1;