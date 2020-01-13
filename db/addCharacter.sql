INSERT INTO characters (char_name, char_description, char_sp_moves, char_combos, char_advanced_combos, char_image)
VALUES ($1, $2, $3, $4, $5, $6);

SELECT * FROM characters