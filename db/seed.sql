-- coffee, users, user's favorites

CREATE TABLE coffee_coffees (
    coffee_coffeeId SERIAL PRIMARY KEY,
    name TEXT,
    origin TEXT,
    description TEXT,
    image TEXT,
    roast TEXT
)

INSERT INTO coffee_coffees (name, origin, description, image, roast) 
VALUES 
('Superior', 'Blend', 'Your go to. Notes - Caramelly & Rich Blend, sweet like butterscotch', 'superior.png', 'medium'),
('Dawn Patrol', 'Kenya', 'When you wake up, you need to hit the ground running - fast. Notes - Almond and Milk Chocolate', 'dawn.jpg', 'light'),
('Beekeepr', 'Ethiopia', 'Our Diner Blend. Notes - berry, chocolate, and wafer', 'mug.svg', 'medium'),
('BlueBird', 'Columbian', 'For those apres coffee breaks. Notes - Orange, Sweet, Creamy', 'clouds.tnf', 'light'),
('Night Pass', 'Nicaragua', 'You like to be bold, so do we. When you need caffeine to match the adrenaline rush for your favorite Black Diamond run. Notes - Toasted Oak', 'diamond.png', 'dark'),
('Cirque Espresso', 'Vietnam', 'Cool and collected, the best cup for your next run', 'gondola.jpeg', 'light')


CREATE TABLE coffee_ratings (
    id SERIAL PRIMARY KEY,
    coffee_id INTEGER REFERENCES coffee_coffees(coffee_coffeeID),
    rating INTEGER
    -- this will be a sub query to average out the reviews of this coffee
)

CREATE TABLE coffee_reviews (
    review_id SERIAL PRIMARY KEY,
    coffee INTEGER REFERENCES coffee_coffees(coffee_coffeeId)
    rating INTEGER,
    title TEXT,
    description TEXT
)
