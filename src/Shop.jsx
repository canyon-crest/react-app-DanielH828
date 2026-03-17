import './Shop.css'
import { useState } from 'react'

function Shop({ myname, description, cost }) {
    const [count, setCount] = useState(0);

    return (
        <div className='myCard'>
            <div className="card-header">
                <h2>{myname}</h2>
                <span className="price-tag">${cost}</span>
            </div>
            
            <p className='description'>
                <strong>Description:</strong> {description}
            </p>

            <div className='actions'>
                <button className='ShopButton add' onClick={() => setCount(count + 1)}>
                    Add to Cart
                </button>
                <button className='ShopButton reset' onClick={() => setCount(0)}>
                    Reset
                </button>
            </div>

            <div className="summary">
                <div className="summary-item">
                    <span>Quantity:</span>
                    <strong>{count}</strong>
                </div>
                <div className="summary-item total">
                    <span>Total Cost:</span>
                    <strong>${(count * cost).toLocaleString()}</strong>
                </div>
            </div>
        </div>
    )
}

export default Shop