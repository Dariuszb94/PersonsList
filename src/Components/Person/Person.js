import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

import "./Person.scss";
const Person = ({ peopleList, setActive }) => {
  const [people, setPeople] = useState([]);
  const [personChanged, setPersonChanged] = useState(false);

  let { personID } = useParams();
  const history = useHistory();
  useEffect(() => {
    setPeople(peopleList);
  }, [peopleList]);
  useEffect(() => {
    setActive(parseInt(personID));
    setPersonChanged((prev) => !prev);
  }, [personID, setActive]);
  const edit = (id) => {
    history.push(`/edit/${id}`);
  };
  return (
    <section className="details-container">
      {people[personID] ? (
        <article className="details">
          <img
            className={`${
              personChanged ? "details__img" : "details__img-active"
            }`}
            src={people[personID].picture.large}
            alt={`${people[personID].name.first}`}
          />
          <div className="details__names">
            <h2 className="details__names__header">Name</h2>
            <div>
              <span className="details__name__content">
                {people[personID].name.title}
              </span>{" "}
              <span className="details__name__content">
                {people[personID].name.first}
              </span>{" "}
              <span className="details__name__content">
                {people[personID].name.last}
              </span>
            </div>
          </div>
          <div className="details__contact">
            <h2 className="details__contact__header">Contact</h2>
            <div className="details__contact__phone">
              <PhoneIcon className="details__contact__phone__icon" />
              <a href={`tel:` + people[personID].phone}>
                {people[personID].phone}
              </a>
            </div>
            <div className="details__contact__mail">
              <MailIcon className="details__contact__mail__icon" />
              <a href={`mailto:` + people[personID].email}>
                {people[personID].email}
              </a>
            </div>
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
