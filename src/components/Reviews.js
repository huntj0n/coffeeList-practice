import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Review from './Review';
import AddReview from './AddReview';

export default function Reviews() {

    const [ reviews, setReviews ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        axios
            .get('/api/reviews')
            .then((response) => {
                setLoading(false);
                setReviews(response.data);
            })
            .catch(err => console.log(err))
    }, [])

    let deleteReview = (id) => {
        axios.delete(`/api/reviews/${id}`)
            .then((res) => {
                setReviews(res.data)
            })
            .catch((err) => console.log(err))
    }

    let editReview = (id, coffee, rating, title, description) => {
        axios.put(`/api/reviews/${id}`, {coffee, rating, title, description})
            .then((res) => [
                setReviews(res.data)
            ])
            .catch((err) => console.log(err))
    }

    return (
        <div className='reviewList'>
            <AddReview 
                resetReviews={setReviews}
            />
            {loading ? 'Reviews Loading...' : (
                reviews.map((r) => {
                    return (
                        <Review 
                            key={r.review_id}
                            review = {r}
                            coffee={r.coffee_coffeeid}
                            rating={r.rating}
                            title={r.title}

                            deleteReviewFn={deleteReview}
                            editReviewFn={editReview}
                        />
                    )
                })
            )}
        </div>
    )
}
