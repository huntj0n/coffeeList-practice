UPDATE coffee_reviews
SET (coffee, rating, title, description) = 
($2, $3, $4, $5)
WHERE review_id = $1;

SELECT * FROM coffee_reviews;