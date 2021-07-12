import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "./Person.scss";
const Person = ({ peopleList, setActive }) => {
  const [people, setPeople] = useState([]);
  let { personID } = useParams();
  const history = useHistory();
  useEffect(() => {
    setPeople(peopleList);
  }, [peopleList]);
  useEffect(() => {
    setActive(parseInt(personID));
  }, [personID, setActive]);
  const edit = (id) => {
    history.push(`/edit/${id}`);
  };
  return (
    <section className="details-container">
      {people[personID] ? (
        <article className="details">
          <img
            className="details__img"
            src={people[personID].picture.large}
            alt={`${people[personID].name.first}`}
          />
          <div className="details__names">
            <h2 className="details__names__header">Name</h2>
            <div>{people[personID].name.title}</div>
            <div>{people[personID].name.first}</div>
            <div>{people[personID].name.last}</div>
          </div>
          <div className="details__contact">
            <h2 className="details__contact__header">Contact</h2>
            <div>{people[personID].phone}</div>
            <div>{people[personID].email}</div>
          </div>
        </article>
      ) : null}

      <button
        className="edit"
        onClick={() => {
          edit(personID);
        }}
      >
        edit
      </button>
    </section>
  );
};
export default Person;
