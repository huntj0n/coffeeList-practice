module.exports = {
    getReviews: (req, res) => {
        const db = req.app.get('db');

        db.reviews
            .get_reviews()
            .then((reviews) => res.status(200).send(reviews))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    addReview: (req, res) => {
        const db = req.app.get('db');
        const {coffee_coffeeid, rating, title, description} = req.body;
        
        db.reviews
            .add_review( coffee_coffeeid, rating, title, description )
            .then((reviews) => res.status(200).send(reviews))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    editReview: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const{coffee_coffeeid, rating, title, description} = req.body;

        db.reviews
            .edit_review(id, coffee_coffeeid, rating, title, description)
            .then((reviews) => res.status(200).send(reviews))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    deleteReview: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.reviews
            .delete_review(id)
            .then((reviews) => res.status(200).send(reviews))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    }
}