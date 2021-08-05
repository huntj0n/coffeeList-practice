import React, { useState } from 'react';
import axios from 'axios';

const AddReview = ({resetReviews}) => {

    const [coffee, setCoffee] = useState('')
    const [rating, setRating] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let addReview = (coffee, rating, title, description) => {
        axios.post('/api/reviews', {coffee, rating, title, description})
            .then((res) => {resetReviews(res.data)})
            .catch((err) => console.log(err))
    }

    let coffeeChange = (value) => {
        setCoffee(value)
    }

    let ratingChange = (value) => {
        setRating(value)
    }

    let titleChange = (value) => {
        setTitle(value)
    }
    let descChange = (value) => {
        setDescription(value)
    }

    

    return (
        <div className='review__add' >
            <div className="review__addTop">
                <select name="coffee" id="" onChange={(e) => {coffeeChange(e.target.value)}}>
                    <option value="">--Please Select a Coffee--</option>
                    <option value="1">Superior</option>
                    <option value="2">Dawn Patrol</option>
                    <option value="3">BeeKeeper</option>
                    <option value="4">BlueBird</option>
                    <option value="5">Night Pass</option>
                    <option value="6">Cirque Espresso</option>
                </select>
                <select name="rating" id="" onChange={(e) => {ratingChange(e.target.value)}}>
                    <option value="">--Please choose a rating--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="text" placeholder='Please add a Title' onChange={(e) => titleChange(e.target.value)}/>
            </div>
            <div className="review__addBottom">
                <textarea name="" id="" cols="30" rows="5" placeholder='Add a Review' onChange={(e) => {descChange(e.target.value)}}></textarea>
            </div>
            <button onClick={() => addReview(coffee, rating, title, description)}>Submit</button>
            
        </div>
    )
}

export default AddReview