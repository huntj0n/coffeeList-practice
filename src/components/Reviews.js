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

    console.log(reviews)

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
                            coffee={r.coffee_coffeeid}
                            rating={r.rating}
                            title={r.title}
                            desc={r.description}
                        />
                    )
                })
            )}
        </div>
    )
}
