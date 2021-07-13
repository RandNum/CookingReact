import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const RecipeUser = () => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    UserService.getUserRecipe().then(
      (response) => {
          console.log(2, response)
          console.log(3, response.data)
        setContent(response.data);
      },
      (error) => {
        console.log(4, error)
        console.log(7, error.response.status)
        const _content =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
          error.message;

        setError(_content);
      }
    );
  }, []);
  console.log(5, content)
  console.log(6, error)
  return (
    
    <div className="container">
      <header className="jumbotron">
        <h3>
            {/* {(error)} */}

            {content  &&
              content.map((recipe) => (
                <li
                  onClick={() => this.setActiveRecipe(recipe, recipe.index)}
                  key={recipe.index}
                >
                  {recipe.title}, {recipe.description}, {recipe.published}
                </li>
              )) 
              }
        </h3>
      </header>
    </div>
  );
};

export default RecipeUser;