import React, { useState, useEffect, useRef } from "react";
import Dexie from "dexie";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./PersonsList.scss";
const PersonsList = ({ setPeopleList, peopleList, active }) => {
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(false);
  const list = useRef(null);
  const db = new Dexie("PersonsDB");
  db.version(1).stores({
    persons: "++id",
  });
  useEffect(() => {
    if (people.length) {
      updateDB();
    }
    setPeopleList(people);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [people, setPeopleList]);
  useEffect(() => {
    checkDB();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [peopleList]);
  async function checkDB() {
    try {
      const fetchedDB = await db.persons.toArray();
      if (
        peopleList.length &&
        JSON.stringify(peopleList) !== JSON.stringify(fetchedDB)
      ) {
        updateDB();
      }
    } catch (err) {
      console.log(err);
    }
  }
  const history = useHistory();

  const goDetails = (id) => {
    history.push(`/details/${id}`);
  };

  useEffect(() => {
    checkGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function checkGet() {
    try {
      const fetchedDB = await db.persons.toArray();
      if (fetchedDB.length > 0) {
        setPeople(fetchedDB);
        return;
      } else {
        getPeople();
      }
    } catch (err) {
      console.log(err);
    }
  }

  const updateDB = async () => {
    await db.persons.clear();
    var preDB = [];
    for (let i = 0; i < people.length; ++i) {
      preDB.push({
        name: {
          title: people[i].name.title,
          first: people[i].name.first,
          last: people[i].name.last,
        },
        email: people[i].email,
        phone: people[i].phone,
        picture: { large: people[i].picture.large },
      });
    }
    db.persons.bulkAdd(preDB);
  };
  const getPeople = () => {
    const url = "https://randomuser.me/api/?results=10";
    axios(url)
      .then((res) => {
        setPeople(res.data.results);
      })
      .catch(function () {
        setError(true);
      });
  };
  const addPeople = () => {
    const url = "https://randomuser.me/api/?results=2";
    axios(url)
      .then((res) => {
        const prevPeople = people;
        const updatedPeople = prevPeople.concat(res.data.results);
        setPeople(updatedPeople);
        scrollToAdded();
      })
      .catch(function () {
        setError(true);
      });
  };
  const scrollToAdded = () => {
    list.current.scrollTop = list.current.scrollHeight;
  };
  return (
    <section className="persons-list-container">
      <h1 className="persons-list__header">List of people</h1>
      <div className="actions">
        <button
          className="actions__modify-list"
          id="add"
          onClick={() => {
            addPeople();
          }}
        >
          add
        </button>

        <button
          className="actions__modify-list"
          onClick={() => {
            getPeople();
          }}
        >
          reset
        </button>
      </div>
      {error ? <div className="error">Error occured</div> : null}
      <ul ref={list} className="persons-list">
        {people.map((person, index) => (
          <li
            className={`persons-list__person ${
              index === active ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              goDetails(index);
            }}
          >
            {person.name.title} {person.name.first} {person.name.last}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default PersonsList;
