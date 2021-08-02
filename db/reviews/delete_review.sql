DELETE FROM coffee_reviews
WHERE review_id = $1;

SELECT * FROM coffee_reviews
ORDER BY review_id;