import React from "react";
import Header from "../Components/Header";
import HomeBody from "../Components/Home.body";
import HomeProjects from "../Components/Home.projects";

function Home () {
  return (
    <div>
      <Header />
      <HomeBody />
      <HomeProjects />
    </div>
  )
}

export default Home;