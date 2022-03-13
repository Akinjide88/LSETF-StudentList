import React from "react"
import "./App.css"
import pics1 from "./images/pics1.jpg"
import pics2 from "./images/pics2.jpg"
import pics3 from "./images/pics3.jpg"
import pics4 from "./images/pics4.jpg"
import pics5 from "./images/pics5.jpg"

const App =()=>{
  const Lsetf = [
    {
      image: <img className="pics" src={pics1} alt="lady"/>,
      name: "Tayo",
      class: "200L", 
      age: 18,
      sex: "Female",
    },
    {
      image: <img className="pics" src={pics2} alt="man"/>,
      name: "Tunde",      
      class: "500L", 
      age: 24,
      sex: "Male",
    },
    {
      image: <img className="pics" src={pics3} alt="man"/>,
      name: "Ayo",
      class: "200L", 
      age: 20,
      sex: "Male",
    },
    {
      image: <img className="pics" src={pics4} alt="lady"/>,
      name: "Funmi",
      class: "100L", 
      age: 18,
      sex: "Female",
    },
    {
      image: <img className="pics" src={pics5} alt="lady"/>,
      name: "Funke",
      class: "300L", 
      age: 26,
      sex: "Female",
    }
  ]

  console.log(Lsetf)
  return(
    Lsetf.map((props)=>(
      <div className="card-holder">
        <div className="card">
          <div>{props.image}</div>
          <div>Name: {props.name}</div>
          <div>class: {props.class}</div>
          <div>Age: {props.age}</div>
          <div>sex: {props.sex}</div>
        </div>
      </div>
    ))
  )
}

export default App;
