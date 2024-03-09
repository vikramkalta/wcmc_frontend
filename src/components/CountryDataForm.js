import React, { useState, useRef } from "react";

function CountryDataForm(props) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setInput(e.target.value);
    props.onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({ trackUrl: input, _id: props.edit?._id });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="country-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update country"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="country-input edit"
          />
          <button onClick={handleSubmit} className="country-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Search country"
            value={input}
            onChange={handleChange}
            name="text"
            className="country-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="country-button">
            Submit
          </button>
        </>
      )}
    </form>
  );
}

export default CountryDataForm;
