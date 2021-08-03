INSERT INTO coffee_reviews
(coffee_coffeeid, rating, title, description)
VALUES
($1, $2, $3, $4);

SELECT * FROM coffee_reviews
ORDER BY review_id;