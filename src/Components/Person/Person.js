import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
const Person = ({ peopleList, setActive }) => {
  const [people, setPeople] = useState([]);
  let { personID } = useParams();
  const history = useHistory();
  useEffect(() => {
    setPeople(peopleList);
  }, [peopleList]);
  useEffect(() => {
    setActive(parseInt(personID));
  }, [personID]);
  const edit = (id) => {
    history.push(`/edit/${id}`);
  };
  return (
    <section>
      {people[personID] ? (
        <article className="details">
          <img
            src={people[personID].picture.large}
            alt={`${people[personID].name.first}-image`}
          />
          <div className="details__names">
            <div>{people[personID].name.title}</div>
            <div>{people[personID].name.first}</div>
            <div>{people[personID].name.last}</div>
          </div>
          <div className="details__contact">
            <div>{people[personID].phone}</div>
            <div>{people[personID].email}</div>
          </div>
        </article>
      ) : null}

      <button
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
