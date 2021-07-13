// import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from 'react-router-dom';
import { useEffect } from "react";

// import AddRecipe from "./components/add-recipe.component";
// import Recipe from "./components/recipe.component";
// import RecipesList from "./components/recipes-list.component";
import { useState } from "react";
import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RecipeUser from "./components/RecipeUser";
import RecipeChef from "./components/RecipeChef";
import RecipeAdmin from "./components/RecipeAdmin";


const App = () => {
  const [showChefRecipe, setShowChefRecipe] = useState(false);
  const [showAdminRecipe, setShowAdminRecipe] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowChefRecipe(user.roles.includes("ROLE_CHEF"));
      setShowAdminRecipe(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Cooking Website
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showChefRecipe && (
            <li className="nav-item">
              <Link to={"/chef"} className="nav-link">
                Chef's Recipes
              </Link>
            </li>
          )}

          {showAdminRecipe && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin's Recipes
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                Recipes
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={RecipeUser} />
          <Route path="/chef" component={RecipeChef} />
          <Route path="/admin" component={RecipeAdmin} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
