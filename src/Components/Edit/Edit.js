import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import "./Edit.scss";
const Edit = ({ peopleList, setPeopleList }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const [emailInvalid, setEmailInvalid] = useState(false);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [nameInvalid, setNameInvalid] = useState(false);
  const [surnameInvalid, setSurnameInvalid] = useState(false);
  let { personID } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (peopleList[personID]) {
      setName(peopleList[personID].name.first);
      setSurname(peopleList[personID].name.last);
      setPhone(peopleList[personID].phone);
      setEmail(peopleList[personID].email);
      setImage(peopleList[personID].picture.large);
    }
  }, [peopleList, personID]);

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
    if (
      validationMail() &&
      validationPhone() &&
      validationName() &&
      validationSurname()
    ) {
      const prevName = name;
      const prevSurname = surname;
      peopleListPrev[personID].name.first =
        prevName.toLowerCase().charAt(0).toUpperCase() +
        prevName.toLowerCase().substring(1);
      peopleListPrev[personID].name.last =
        prevSurname.toLowerCase().charAt(0).toUpperCase() +
        prevSurname.toLowerCase().substring(1);
      peopleListPrev[personID].email = email;
      peopleListPrev[personID].phone = phone;
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
  function validationName() {
    const nameRegex = /^[a-zA-Z]+$/;
    if (nameRegex.test(String(name).toLowerCase())) {
      setNameInvalid(false);
      return true;
    } else {
      setNameInvalid(true);
      return false;
    }
  }
  function validationSurname() {
    const nameRegex = /^[a-zA-Z]+$/;
    if (nameRegex.test(String(surname).toLowerCase())) {
      setSurnameInvalid(false);
      return true;
    } else {
      setSurnameInvalid(true);
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
    <section className="edit-container">
      <form onSubmit={handleSubmit}>
        <picture>
          <img className="edit__img" src={image} alt={`${name}`} />
        </picture>
        <div className="input-container">
          <label className="input__key">First name</label>
          <input
            type="text"
            className={`input__value ${nameInvalid ? "invalid" : ""}`}
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className="input-container">
          <label className="input__key">Last name</label>
          <input
            type="text"
            className={`input__value ${surnameInvalid ? "invalid" : ""}`}
            value={surname}
            onChange={handleChangeSurname}
          />
        </div>
        <div className="input-container">
          <label className="input__key">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={handleChangePhone}
            className={`input__value ${phoneInvalid ? "invalid" : ""}`}
          />
        </div>
        <div className="input-container">
          <label className="input__key">Email</label>
          <input
            type="text"
            value={email}
            onChange={handleChangeEmail}
            className={`input__value ${emailInvalid ? "invalid" : ""}`}
          />
        </div>
        <input className="send" type="submit" value="Wyślij" />
      </form>
    </section>
  );
};
export default Edit;
