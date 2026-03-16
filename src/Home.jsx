import './Home.css'

function Home({setPage}) {
    return (
        <div className="home">
            <h1>Welcome to My Website</h1>
            <p>
                This website was created by a high school student at Canyon Crest Academy for their Exploring Computer Science class :D. - Daniel He
            </p>
            <h1>Featured Pages:</h1>
        <div className="features">
            <div className="feature-card">
                <h1>Shop</h1>
                <p>My Shop features exclusive items found nowhere else on the planet. Everything is fairly priced by the current market standards. Limited supply, so buy fast! (THIS IS ALL FICTIONAL, I DID NOT ACTUALLY ACQUIRE ANY ITEMS FROM THEIR RESPECTIVE PERSONS!!!)</p>
            </div>
            <div className="feature-card">
                <h1>Contact Me</h1>
                <p>The "Contact" page leads you to an interactive design that I made with help from an LLM. I couldn't get the timing working, but it has many features similar to my HTML website. (Doesn't actually contact me, but it takes the inputted data and outputs it)</p>
            </div>
        </div>
        </div>
    );
}

export default Home;