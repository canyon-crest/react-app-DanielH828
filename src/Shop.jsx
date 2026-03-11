import './Card.css'

import{ useState } from 'react'

function Shop({myname,description, cost}) {

    const [count, setCount] = useState(0);

    return (
        <div className='myCard'>
            <h2>{myname}</h2> 
            <p>Description: {description} Cost: ${cost}</p>
            <button onClick={() => setCount(count+1)}>Add {myname} to cart</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>Total {myname}: {count}</p>
            <p>Total Cost of item: {count*cost}</p>
        </div>
    )
}
export default Shop
  