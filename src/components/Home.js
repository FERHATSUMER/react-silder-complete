import React, { useState, useEffect } from "react";
import "./home.css";
import data from "./data";
import {FaQuoteRight} from 'react-icons/fa';
import{FiChevronsLeft, FiChevronsRight} from 'react-icons/fi';
function Home() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name,title ,quote } = person;
          return (
            <article key={id}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p>{title}</p>
            <p> {quote}</p>
            <FaQuoteRight className="icon"/>
            </article>
          )
        })}
        <button><FiChevronsLeft className="prev"/></button>
        <button><FiChevronsRight className="next"/></button>
      </div>
    </section>
  );
}
export default Home;
