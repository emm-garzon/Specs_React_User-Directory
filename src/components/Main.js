import React from "react";
import Header from "./Header";
import UserCard from "./UserCard";
import data from "../data";

function Main() {
  return (
    <div>
      <Header />
      <UserCard data={data} />
    </div>
  );
}

export default Main;
