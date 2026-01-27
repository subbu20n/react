import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Recipe() {
  const [recipe, setrecipe] = useState(""); 
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(response => { 
        setrecipe(response); 
      }); 
  }, [id]);

  return (
    <>
      <h1>recipe {id}</h1> 
      {recipe && <img src={recipe.image} style={{ width: "300px" }} />}
    </>
  );
}

export default Recipe;
