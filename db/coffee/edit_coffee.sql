UPDATE coffee_coffees
SET (name, origin, description, image, roast) =
($2, $3, $4, $5, $6)
WHERE coffee_coffeeId = $1;

SELECT * FROM coffee_coffees
ORDER BY coffee_coffeeId;