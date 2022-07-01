
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
function Dicription() {
  const { id } = useParams();
  // 

  useEffect(() => {
    fetchItem()
  }, []);
  const [posts, setPosts] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true `)
    const posts = await data.json();
    setPosts(posts)
    console.log(posts)
    const item = posts.map(it => {
      console.log(it.eventId)
    })

    // for (let variable in items) {
    //   console.log(variable.acronym)
    // }


    // .then((response) => response.json())
    // .then((response) => console.log(response))
    // .then((response) => setItems(response))
  }
  return (
    posts.map(post => (
      <Link> key={post.eventId} to={`/movie-description/${post.eventID}`}</Link>
    ))
  )


}
export default Dicription;
