UPDATE characters
SET char_name = $2, 
char_description = $3,
char_sp_moves = $4, 
char_combos = $5, 
char_advanced_combos = $6, 
char_image = $7
WHERE char_id = $1