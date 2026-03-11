import './Nav.css'

function Nav( {setPage} ){
    
    return (
        <div>
            <ul>
                <li onClick={()=>setPage("Home")}>Home</li>
                <li onClick={()=>setPage("Shop")}>Shop</li> 
                <li onClick={()=>setPage("contact")}>Contact</li>
            </ul>
        </div>
    )
}
export default Nav