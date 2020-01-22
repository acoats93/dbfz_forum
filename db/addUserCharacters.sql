UPDATE users 
SET point_char_id = $1,
    mid_char_id = $2,
    anchor_char_id =$3
WHERE user_id = $4;

SELECT * FROM users
WHERE user_id = $4;