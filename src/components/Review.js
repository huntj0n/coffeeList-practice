import React, {useState} from 'react'

function Review({coffee, rating, title, review, deleteReviewFn, editReviewFn}) {

    //could do another axios call here for the coffee id name or maybe hit a different enpoint... going to need to do the same thing for the averaged rating... could be smarter to do two axios calls in App.js then compare the lists and pass info down as props. for simplicity sake ill make another axios call here eventually. Or could I change SQL queries to reference the name instaed of the ID?? eeven simpler and way less JS.

    //there has to be a drier way to write these change handlers and state variables instead of in here and in the add component. maybe write it all in the parent and then pass it down to both children

    const [ edit, setEdit ] = useState(false);

    const [description, setDescription ] = useState(review.description)
    

    let toggleEdit = () => {
        setEdit(!edit)
    }
    let descriptionChange = (value) => {
        setDescription(description)
    }

    let save = () => {
        editReviewFn(review.review_id, {coffee, rating, title, description});
        toggleEdit();
    }

    return (
        <div className='review'>
            <p>{coffee}</p>
            <p>{rating}</p>
            <p>{title}</p>
            <p>{edit ? (
                <div>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e) => descriptionChange(e.target.value)}></textarea>
                    <button onClick={() => save()}>Save</button>
                </div>
                ) : (
                <div>
                    {description}
                    <button className="edit" onClick={() => toggleEdit()}>Edit</button>
                </div>
                ) }</p>
            
            <button className="delete" onClick={() => deleteReviewFn(review.review_id)}>Delete</button>
        </div>
    )
}

export default Review
