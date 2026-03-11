import './index.css'

function Home(){
    const [count, setCount] = useState(0);

    return (
        <div className='myCounter'>
            <h1>Welcome to the Website!</h1>
            <h2>Here's a Fun Counter</h2> 
            <p>Description: {descriptionCounter}</p>
            <button onClick={() => setCount((count+1)+count)}>Click + {count+1}</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>Total Clicks: {count}</p>
        </div>
    )
}


export default Home