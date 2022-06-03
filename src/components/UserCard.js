import React, { useEffect, useState } from "react";
import data from "../data";

function UserCard(props) {
  const users = props.data.slice(0, props.data.length);

  let [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  let user = users[index];

  const newUser = {
    id: users.length + 1,
    name: {
      first: "",
      last: "",
    },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: ["", "", ""],
  };

  const next = () => {
    setIndex(index + 1);
  };

  const previous = () => {
    setIndex(index - 1);
  };

  const deleteUser = () => {
    data.splice(index, 1);
    if (index <= data.length) {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
  };

  const addUser = (e) => {
    e.preventDefault();
    user.push(newUser);
    // console.log(users)
  };

  const handleChange = (e) => {
    let key = e.target.name;
    newUser[key] = e.target.value;
    // console.log(newUser)
  };

  const handleNameChange = (e) => {
    let key = e.target.name;
    newUser.name[key] = e.target.value;
    // console.log(newUser)
  };

  const handleMovie = (e) => {
    let index = e.target.name;
    newUser.favoriteMovies[index] = e.target.value;
  };

  const showForm = () => {
    setShow(!show);
  };

  return (
    <div className="wrapper">
      <div>
        <form className={show ? "display-form" : "hide-form"}>
          {/* NEW USER FORM */}
          <p>
            First Name: <input name="first" onChange={handleNameChange} />
          </p>
          <p>
            Last Name: <input name="last" onChange={handleNameChange} />
          </p>
          <p>
            City: <input name="city" onChange={handleChange} />
          </p>
          <p>
            Country: <input name="country" onChange={handleChange} />
          </p>
          <p>
            Job Title: <input name="title" onChange={handleChange} />
          </p>
          <p>
            Employer: <input name="employer" onChange={handleChange} />
          </p>
          <h3>Favorite Movies</h3>
          <p>
            1: <input name="0" onChange={handleMovie} />
          </p>
          <p>
            2: <input name="1" onChange={handleMovie} />
          </p>
          <p>
            3: <input name="2" onChange={handleMovie} />
          </p>
          <button onClick={addUser}>Add User</button>
        </form>
        {/* DISPLAY CURRENT USER INFO */}
        <h2>
          {user.id} / {users.length}
        </h2>
        {/* User Name */}
        <div className="user-name">
          <span>
            <h1>
              {user.name.first} {user.name.last}
            </h1>
          </span>
        </div>
        {/* User Details */}
        <div className="user-details">
          <span>
            {user.name.first} {user.name.last}
          </span>
        </div>
        <div class="user-info">
          <h3>From: </h3>
          <p>
            {user.city}, {user.country}
          </p>
        </div>
        <div class="user-info">
          <h3>Job Title: </h3>
          <p>{user.title}</p>
        </div>
        <div class="user-info">
          <h3>Employer: </h3>
          <p>{user.employer}</p>
        </div>
        {/* User Additional Details - Favorite Movies */}
        <div>
          <h3>Favorite Movies:</h3>
          <p>1. {user.favoriteMovies[0]}</p>
          <p>2. {user.favoriteMovies[1]}</p>
          <p>3. {user.favoriteMovies[2]}</p>
        </div>
        {/* Closing Divs */}
      </div>
      {/* Directory Navigation */}
      <div>
        {/* Button dynamically added with logic */}
        {index === 0 ? (
          <button></button>
        ) : (
          <button onClick={previous}>{"<"} Previous</button>
        )}
        {/* Edit or Delete current user displayed */}
        <div>
          <button>Edit</button>
          <button onClick={deleteUser}>Delete</button>
          <button onClick={showForm}>New</button>
        </div>
        {/* Button dynamically added with logic */}
        {index === data.length - 1 ? (
          <p></p>
        ) : (
          <button onClick={next}>Next {">"}</button>
        )}
      </div>
    </div>
  );
}

export default UserCard;
