import "../../App.css";
import "./Filter.css";
import { useState } from 'react';


const Filter = ({ setSort, sortBy}) => {
  const [radio, setRadio] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = event => {
    event.preventDefault();
    setShow(show => !show); //close and open options
    setRadio(event.target.value) //display wich genres is active
    setSort(Number(event.target.id)); //actual filter function by ID
  }

  let toggleClassCheck = show ? ' active' : 'in-active';

  return (
    <div className="Filter-Mobile-Container">
            <div className="form-container">
          <div className="Filter-Select-Group">
              <button 
              onClick={handleClick} 
              type="submit" 
              id="0" 
              name="where"
              className={`Filter-Button Btn-active${toggleClassCheck}`}
              >
              <span 
              onClick={handleClick} 
              id="0" 
              className="select-label">
              {radio ? radio : "Genre"}
               </span>
              <div id="0" className={`Filter-Arrow Arrow-active${toggleClassCheck}`}></div>
              </button>
          </div>
  
          <div className={`Filter-Dropdown dropdown${toggleClassCheck}`} id="dropdown">

              <div className="Filter-Input-Container">
              <input 
              type="radio" 
              checked={radio === "SciFic"}
              onChange={handleClick}
              id="878" 
              name="878" 
              value="SciFic" 
              className="option"
              />
              <label for="878" className="select-item">SciFic</label>
              </div>

              <div className="Filter-Input-Container">
              <input 
              type="radio" 
              checked={radio === "Action"}
              onChange={handleClick}
              id="28" 
              name="28" 
              value="Action" 
              className="option"
              />
              <label for="28" className="select-item">Action</label>
              </div>
  
              <div className="Filter-Input-Container">                
              <input 
              type="radio" 
              checked={radio === "Comedy"}
              onChange={handleClick}
              id="35" 
              name="where" 
              value="Comedy" 
              className="option"
              /> 
              <label for="35" className="select-item">Comedy</label>
              </div>

              <div className="Filter-Input-Container">
              <input 
              type="radio" 
              checked={radio === "Fantasy"}
              onChange={handleClick}
              id="14" 
              name="where" 
              value="Fantasy" 
              className="option"
              />
              <label for="14" className="select-item">Fantasy</label>
              </div>             

              
              <div className="Filter-Input-Container">
              <input 
              type="radio" 
              checked={radio === "Thriller"}
              onChange={handleClick}
              id="53" 
              name="where" 
              value="Thriller" 
              className="option"
              />
              <label for="53" className="select-item">Thriller</label>
              </div>
          </div>
      </div>
    </div>

    );



  // const onchange = (e) => {
  //   e.preventDefault();
  //   setSort(Number(e.target.value));
  // };

  
  // return (
  //   <div className="Filter-Form-Container">
  //     <form>
  //       <div className="Filter-Container">
  //         <select className="Filter-Dropdown" onChange={onchange}>
  //           <option value="0">Genre</option>
  //           <option value="878">SciFic</option>
  //           <option value="28">Action</option>
  //           <option value="35">Comedy</option>
  //           <option value="53">Thriller</option>
  //         </select>
  //     </div>

  //     </form>
  //   </div>
  // );
};

export default Filter;
