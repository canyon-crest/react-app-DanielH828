import './Shop.css'

import{ useState } from 'react'

function Shop({myname,description, cost}) {

    const [count, setCount] = useState(0);

    return (
        <div className='myCard'>
            <h2 itemID='name'>{myname}</h2> 
            <p itemID='Description'>Description: {description} Cost: ${cost}</p>
            <button className='ShopButton'onClick={() => setCount(count+1)}>Add {myname} to cart</button>
            <button className='ShopButton'onClick={() => setCount(0)}>Reset</button>
            <div className="Cost">
                <p>Total {myname}: {count}</p>
                <p>Total Cost of item: {count*cost}</p>
            </div>
        </div>
    )
}
export default Shop
  