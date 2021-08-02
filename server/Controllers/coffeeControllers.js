module.exports = {
    getCoffees: (req, res) => {
        const db = req.app.get('db');
        db.coffee
            .get_coffees()
            .then((coffees) => {
                res.status(200).send(coffees)
            })
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            });
    },
    addCoffee: (req, res) => {
        const db = req.app.get('db');
        const {name, origin, description, image, roast} = req.body;
        db.coffee
            .add_coffee(name, origin, description, image, roast)
            .then((coffees) => {
                res.status(200).send(coffees)
            })
            .catch((err) => { 
                console.log(err)
                res.status(500).send(err)
            });
    },
    editCoffee: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {name, origin, description, image, roast} = req.body;
        db.coffee
            .edit_coffee(id, name, origin, description, image, roast)
            .then((coffees) => res.status(200).send(coffees))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            });
    },
    deleteCoffee: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.coffee
            .delete_coffee(id)
            .then((coffees) => res.status(200).send(coffees))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    }
}