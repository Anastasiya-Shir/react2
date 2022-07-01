
import React, { useState, useEffect } from "react";
import Button from "./button";
import '../App.css';
function Films() {

  useEffect(() => {
    fetchFilms()
  }, []);
  const [items, setItems] = useState([]);

  const fetchFilms = async () => {
    const data = await fetch('https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true')
    const items = await data.json();
    console.log(items)
    // const items = list.map(it => {
    //   console.log(it.acronym)
    // })

    // for (let variable in items) {
    //   console.log(variable.acronym)
    // }

    setItems(items)
    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .then((response) => setItems(response))
  }

  return (
    <div className="filmCard">
      {items.map(item => (
        <><h1>{item.acronym}</h1><img src={item.posterLink} /> <Button /></>

      ))}

      {/* 
      {items.map(item => (

        
      ))} */}
    </div>


  )
};

export default Films;
