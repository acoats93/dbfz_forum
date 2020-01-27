SELECT * FROM comments c
INNER JOIN characters ch ON ch.char_id = c.char_id
WHERE c.char_id = $1