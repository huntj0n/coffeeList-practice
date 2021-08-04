import React, { useState } from 'react';
import axios from 'axios';

const AddReview = () => {

    const [coffeeId, setCoffeeId] = useState('')
    const [rating, setRating] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <form className='review__add'>
            <div className="review__addTop">
                <select name="coffee" id="">
                    <option value="">--Please Select a Coffee--</option>
                    <option value="1">Superior</option>
                    <option value="2">Dawn Patrol</option>
                    <option value="3">BeeKeeper</option>
                    <option value="4">BlueBird</option>
                    <option value="5">Night Pass</option>
                    <option value="6">Cirque Espresso</option>
                </select>
                <select name="rating" id="">
                    <option value="">--Please choose a rating--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="text" placeholder='Please add a Title' />
            </div>
            <div className="review__addBottom">
                <textarea name="" id="" cols="30" rows="5" placeholder='Add a Review'></textarea>
            </div>
            <button>Submit</button>
            
        </form>
    )
}

export default AddReview
