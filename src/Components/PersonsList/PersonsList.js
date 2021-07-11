import React, { useState, useEffect, useReducer } from "react";
import Dexie from "dexie";
import axios from "axios";
import { useHistory } from "react-router-dom";

const PersonsList = ({ setPeopleList, peopleList }) => {
  const [people, setPeople] = useState([]);
  //const [preDBUpdate, setPreDBUpdate] = useState([]);

  const db = new Dexie("PersonsDB");
  db.version(1).stores({
    persons: "++id, name, age",
  });
  useEffect(() => {
    if (people.length) {
      updateDB();
    }
    console.log(people);
    setPeopleList(people);
  }, [people]);
  useEffect(async () => {
    const fetchedDB = await db.persons.toArray();
    if (
      peopleList.length &&
      JSON.stringify(peopleList) != JSON.stringify(fetchedDB)
    ) {
      updateDB();
    }
  }, [peopleList]);
  const history = useHistory();

  const goDetails = (id) => {
    history.push(`/details/${id}`);
  };
  // useEffect(() => {
  //   console.log("asdasd");
  //   if ()
  //     console.log("asdasd");
  //   //  setPeople(peopleList);
  // }, [peopleList]);
  useEffect(async () => {
    const fetchedDB = await db.persons.toArray();

    if (fetchedDB.length > 0) {
      setPeople(fetchedDB);
      return;
    } else {
      getPeople();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    axios(url).then((res) => {
      setPeople(res.data.results);
      console.log(res.data.results);
    });
  };
  const addPeople = () => {
    const url = "https://randomuser.me/api/?results=2";
    axios(url).then((res) => {
      const prevPeople = people;
      const updatedPeople = prevPeople.concat(res.data.results);
      setPeople(updatedPeople);
    });
  };
  return (
    <section>
      <button
        onClick={() => {
          addPeople();
        }}
      >
        add
      </button>

      <button
        onClick={() => {
          getPeople();
        }}
      >
        reset
      </button>
      {people.map((person, index) => (
        <li key={index}>
          {person.name.title}
          {person.name.first}
          {person.name.last}
          {person.name.phone}
          {person.name.email}
          <button
            onClick={() => {
              goDetails(index);
            }}
          >
            details{index}
          </button>
        </li>
      ))}
    </section>
  );
};
export default PersonsList;
