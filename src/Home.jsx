import './Home.css'
import { useEffect, useState } from 'react';
import { db, auth, provider } from './firebase'; // Custom Firebase config
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'; // Auth methods
import { collection, getDocs } from 'firebase/firestore'; // Firestore methods



function Home({setPage}) {
    const [apiData, setApiData] = useState('');
    const fetchDogImage = async () => {
        try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const data = await response.json();
          setApiData(data.message); // "message" is the field of the image URL
        } catch (error) {
          console.error('Error fetching dog image:', error);
        }
      };
      
    const [user, setUser] = useState(null);

    // State to hold messages from Firestore
    const [messages, setMessages] = useState([]);
  
    // Monitor authentication status (e.g., login/logout) in real time
    useEffect(() => {
      // Set up a listener that triggers every time the auth state changes
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser); // Update the user state with the logged-in user
      });
  
      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, []);
  
    // Handle Google login using a popup window
    const handleLogin = async () => {
      try {
        await signInWithPopup(auth, provider); // Triggers Google login flow
      } catch (error) {
        console.error('Login failed', error); // Catch and display any login errors
      }
    };
  
    // Handle logout for the authenticated user
    const handleLogout = async () => {
      try {
        await signOut(auth); // Signs out the current user
        setUser(null); // Clear the user from local state
      } catch (error) {
        console.error('Logout failed', error); // Catch and display logout errors
      }
    };
  
    // Fetch all messages from the "messages" collection in Firestore
    const fetchMessages = async () => {
      const snapshot = await getDocs(collection(db, 'messages')); // Get all documents
      const list = snapshot.docs.map(doc => doc.data()); // Convert docs to plain JS objects
      setMessages(list); // Update the messages state
    };
  
    // Add a new message to Firestore
    const sendMessage = async () => {
      if (!input.trim()) return; // Don't send empty messages
  
      // Add a new message with the user's name and current timestamp
      await addDoc(collection(db, 'messages'), {
        text: input,
        name: user.displayName,
        timestamp: Date.now()
      });
  
      setInput(''); // Clear the input field
      fetchMessages(); // Refresh the message list after sending
    };
  
    // Re-fetch messages any time the user logs in
    useEffect(() => {
      if (user) {
        fetchMessages();
      }
    }, [user]);


    return (
        <div className="home">
            <h1>Welcome to My Website</h1>
            <p>
                This website was created by a high school student at Canyon Crest Academy for their Exploring Computer Science class :D. - Daniel He
            </p>
            <h1>Featured:</h1>
        <div className="features">
            <div className="feature-card">
                <h1>Shop</h1>
                <p>My Shop features exclusive items found nowhere else on the planet. Everything is fairly priced by the current market standards. Limited supply, so buy fast! (THIS IS ALL FICTIONAL, I DID NOT ACTUALLY ACQUIRE ANY ITEMS FROM THEIR RESPECTIVE PERSONS!!!)</p>
            </div>
            <div className="feature-card">
                <h1>Contact Me</h1>
                <p>The "Contact" page leads you to an interactive design that I made with help from an LLM. I couldn't get the timing working, but it has many features similar to my HTML website. (Doesn't actually contact me, but it takes the inputted data and outputs it)</p>
            </div>
        {/* If user is logged in, show greeting, logout button, and messages */}
        {user ? (
            <div>
            <h2>Hello, {user.displayName}</h2>
            <button onClick={handleLogout}>Log Out</button>

            <ul>
                {messages.map((msg, i) => (
                <li key={i}>
                    <strong>{msg.name || 'Anon'}:</strong> {msg.text}
                </li>
                ))}
            </ul>
            </div>
        ) : (
        // If no user is logged in, show login button
            <div className='feature-card'>
            <h1>Login</h1>
            <p>Please log in with Google to continue. Clicking the button should open a pop-up window where you can choose what Google account to use. This feature does NOT provide a sign in feature, you can only login if you have an account through Firebase.</p>
            <button onClick={handleLogin} itemID='LoginButton'>Login with Google</button>
            </div>
        )}
            </div>
            <h1> Cool Api:</h1>
                <button onClick={fetchDogImage} className='APIButton'>Fetch Dog Image</button>
                {apiData && <img src={apiData} alt="Random Dog" />}
            </div>
    );
}

export default Home;