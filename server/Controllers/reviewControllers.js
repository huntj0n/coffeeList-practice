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
        const{coffee, rating, title, description} = req.body;

        db.reviews
            .add_reviews(coffee, rating, title, description)
            .then((reviews) => res.status(200).send(reviews))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err)
            })
    },
    editReview: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const{coffee, rating, title, description} = req.body;

        db.reviews
            .edit_reviews(id, coffee, rating, title, description)
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
            .get_reviews(id)
            .then((reviews) => res.status(200).send(reviews))
            .catch((err) => {
                onsole.log(err)
                res.status(500).send(err)
            })
    }
}