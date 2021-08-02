INSERT INTO coffee_coffees
(name, origin, description, image, roast)
VALUES
($1, $2, $3, $4, $5);

SELECT * FROM coffee_coffees
ORDER BY coffee_coffeeId;