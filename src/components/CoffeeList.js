import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Coffee from './Coffee';

function CoffeeList() {

    const [ coffeeList, setCoffeeList ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios
            .get('/api/coffee')
            .then((response) => {
                setLoading(false)
                setCoffeeList(response.data)
                console.log(coffeeList)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='coffeeList'>
            {loading ? 'Loading...' : (
                coffeeList.map((c) => {
                    return (
                        <Coffee 
                            key={c.coffee_coffeeidq}
                            name={c.name}
                            description={c.description}
                            origin={c.origin}
                            image={c.image}
                        />
                    )
                })
            )}
        </div>
    )
}

export default CoffeeList

