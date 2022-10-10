import '../../App.css';
// import './NavBar.css';
import './NavBar2.css';
import { Link } from "react-router-dom";


const NavBar = (props) => {
    const changeHandler = (e) => {
        props.setQuery(e.target.value);
    }

    return ( 
        <div className='NavBar-Container'>
            <div className='NavBar-h1-Container'>
                <Link to="/" className="NavBar-Link">
                    <h1><span>.</span>MOV</h1>
                </Link>
            </div>

            <div className='NavBar-Form-Container'>
                <form onSubmit={props.searchMovie}>
                    <button 
                    className="Search-Function"
                    id="searchBtn"
                    type="submit">
                    </button>
                    
                    <input 
                    className='NavBar-Search' 
                    type="search" 
                    name="searchBar" 
                    id="searchBar" 
                    placeholder='Search something here' 
                    value={props.query} 
                    onChange={changeHandler}/>
                </form>
            </div>
        </div>
     );
}
 
export default NavBar;