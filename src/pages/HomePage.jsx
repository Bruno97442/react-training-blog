import React, { Fragment } from "react";
import ArticlesList from "../components/ArticlesList";
import About from "../components/About";
import Contact from "../components/Contact";
import Animation from "../components/Animation";
import "./MainPage.css";
import ScrollButton from "../components/ScrollButton";
import { Link } from "react-router-dom";

const HomePage = () => {
  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <Fragment>
      <div>
        <Animation />
      </div>
      <div className="mt-5 p-5 grey article-page reveal">
        <h1 className="text-center">Last Articles</h1>
        <ArticlesList max="8" searchbarOff></ArticlesList>
        <Link to="articles" className="row justify-content-center">
          <button className="custom-btn col-4">
            See More Articles
          </button>
        </Link>
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="grey reveal">
        <Contact />
      </div>
      <ScrollButton />
    </Fragment>
  );
};

export default HomePage;
