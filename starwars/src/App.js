import React, {useState, useEffect} from 'react';
import Name from "./components/name";
import Birthyear from "./components/Birthdate"
import Height from "./components/Height";
import axios from "axios";
import './App.css';
import {Contain} from "./components/Style";

const App = () => {

  const[data, setData] = useState([]);
 
  useEffect (() =>{
    axios 
    .get("https://swapi.co/api/people/?page=2")
    .then( e => {
      console.log(e)
      console.log(e.data.results)
      setData(e.data.results)
    })
    .catch(err => {console.log(err)
    });
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    {data.map((person)=>{
      return(
      
      <Contain>
        <Name name = {person.name}/>
        <Birthyear birth_year={person.birth_year}/>
        <Height height ={person.height}/>
      </Contain>
      )}
      )}
    </div>
  );
}

export default App;


/*Attempted Card

  <Card 
      name = {nameState.name}
      birthdate = {birthDay.birth_year}
      height = {heightState.height}
  />
*/


/* Failed attem to .map over array 
{data.map((data, index) => {
        return <Name name = {data.name} key = {index}/> 
        })
      }
*/