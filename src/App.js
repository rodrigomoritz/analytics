import React, {useState, useEffect} from 'react';

import api from './services/api';

import './App.css';

import seta from './assets/seta.png';

import Header from './components/Header';

function App(){

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/stock/list?apikey=47fbec7870edc279dfc9e0bbfc07dcc9').then(response => {     
      //console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  return(
    <>
      <div className="container">
        <div className="row">
          <Header title="SoftExpert">
          Stock Exchange Challenge
          </Header>
        </div>
      
        <div className="row">
          <div className="input-group mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"> 
              <svg className="bi bi-search" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
              <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="bi bi-search"/>
            <button type="button" className="btn btn-secondary btn">Compare</button>          
          </div>
        </div>
        <div className="row">
        
        <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Symbol</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
               {projects.map(project => 
              <tr key={project.symbol}>
                <th scope="row"><input value={project.symbol} type="checkbox" aria-label="Checkbox for following text input"/></th>
                <td>{project.symbol}</td>
                <td>{project.name}</td>
                <td>{project.price}</td>
                <td><svg className="bi bi-arrow-right-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fillRule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
  <path fillRule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
</svg></td>
              </tr>
              )}
              
            </tbody>
          </table>
        </div>

      </div>
    </>
  )
}

export default App;