import React from 'react'

function Review({coffee, rating, title, desc, deleteReviewFn, editReviewFn, review}) {

    //could do another axios call here for the coffee id name or maybe hit a different enpoint... going to need to do the same thing for the averaged rating... could be smarter to do two axios calls in App.js then compare the lists and pass info down as props. for simplicity sake ill make another axios call here eventually. Or could I change SQL queries to reference the name instaed of the ID?? eeven simpler and way less JS.

    return (
        <div className='review'>
            <p>{coffee}</p>
            <p>{rating}</p>
            <p>{title}</p>
            <p>{desc}</p>

            <button className="delete" onClick={() => deleteReviewFn(review.review_id)}>Delete</button>
            <button className="edit" onClick={() => editReviewFn()}>Edit</button>
        </div>
    )
}

export default Review
