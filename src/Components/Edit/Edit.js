import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "./Edit.scss";
const Edit = ({ peopleList, setPeopleList }) => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);

  let { personID } = useParams();
  const history = useHistory();
  useEffect(() => {
    setPeople(peopleList);
  }, [peopleList]);
  useEffect(() => {
    if (peopleList[personID]) {
      setName(peopleList[personID].name.first);
      setSurname(peopleList[personID].name.last);
      setPhone(peopleList[personID].phone);
      setEmail(peopleList[personID].email);
      setImage(peopleList[personID].picture.large);
    }
  }, [peopleList, personID]);
  useEffect(() => {
    //if (JSON.stringify(peopleList) !== JSON.stringify(people))
    // setPeopleList(people);
  }, [people]);
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const peopleListPrev = [...peopleList];
    validationMail();
    peopleListPrev[personID].name.first = name;
    peopleListPrev[personID].name.last = surname;
    peopleListPrev[personID].email = email;
    peopleListPrev[personID].phone = phone;
    if (validationMail() && validationPhone()) {
      setPeopleList(peopleListPrev);
    } else {
      return false;
    }
    backToDetails();
  };
  function validationMail() {
    const mailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mailRegex.test(String(email).toLowerCase())) {
      setEmailInvalid(false);
      return true;
    } else {
      setEmailInvalid(true);
      return false;
    }
  }
  function validationPhone() {
    const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g;
    if (phoneRegex.test(String(phone).toLowerCase())) {
      setPhoneInvalid(false);
      return true;
    } else {
      setPhoneInvalid(true);
      return false;
    }
  }
  const backToDetails = () => {
    history.push(`/details/${personID}`);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <img src={image} alt={`${name}`} />
        <div>
          <label> first name</label>
          <input type="text" value={name} onChange={handleChangeName} />
        </div>
        <div>
          <label> last name</label>
          <input type="text" value={surname} onChange={handleChangeSurname} />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={handleChangePhone}
            className={`${phoneInvalid ? "invalid" : ""}`}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={handleChangeEmail}
            className={`${emailInvalid ? "invalid" : ""}`}
          />
        </div>
        <input type="submit" value="Wyślij" />
      </form>
    </section>
  );
};
export default Edit;
