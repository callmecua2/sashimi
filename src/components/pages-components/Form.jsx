import { event } from "jquery";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState();

  const getName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const booking = () => {
    if (name == 0) {
      alert("Fill the form first");
    } else {
      alert(`Thank you ${name} for your reservation`);
    }
  };

  const [numberEmptyError, setNumberEmptyError] = useState(false);
  const [messageEmptyError, setMessageEmptyError] = useState(false);
  const [formData, setFormData] = useState({
    mobileNumber: "",
    message: "",
  });

  const { mobileNumber, message } = formData;
  
  const onChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  
  const onSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length < 1) {
      setNumberEmptyError(true);
      setTimeout(() => setNumberEmptyError(false), 3000);
    } else if (message.length < 1) {
      setMessageEmptyError(true);
      setTimeout(() => setMessageEmptyError(false), 3000);
    } else {
      // TODO: Enter code here
    }
  };


  return (
    <>
      <h2 className=" text-3xl mt-5 mb-5 text-white font-semibold md:text-4xl md:mb-8">
        Reservation Online
      </h2>
      <form
        action=""
        name="booking-form"
        className=" flex flex-wrap justify-center"
      >
        <input
          value={name}
          onChange={(event) => getName(event)}
          type="text"
          id="name"
          placeholder="Your Name"
          className="book-form mb-3"
        />
        <input
          type="text"
          placeholder="Your Phone"
          id="phone"
          className="book-form mb-3"
        />
        <select name="table" id="table" className="book-form mb-3">
          <option value="Select">Number of Table</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <input type="date" name="date" id="date" className="book-form mb-3" />
        <input
          type="text"
          id="times"
          placeholder="10.00AM - 07.00PM"
          className="book-form mb-3"
        />
        <select name="person" id="person" className="book-form mb-3">
          <option value="Select">Number of Persons</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </form>
      <textarea
        id="book-request"
        className=" reservation-text mt-8 mb-8 outline-none"
        cols="38"
        rows="10"
        placeholder="Special Request"
      ></textarea>
      <button
        id="book-button"
        type="button"
        className=" text-2xl text-white h-10 bg-red-600"
        onClick={() => booking()}
      >
        Book Now
      </button>
    </>
  );
};

export default Form;