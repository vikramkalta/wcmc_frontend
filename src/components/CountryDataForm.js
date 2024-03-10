import React, { useState, useRef } from "react";
import { debounce } from "../utils/Debounce";

function CountryDataForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  
  
  const debouncedFetch = debounce(props.onSearch, 500);

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedFetch(e.target.value);
  };
  

  return (
    <form className="country-form">
      <input
        placeholder="Search country"
        value={input}
        onChange={handleChange}
        name="text"
        className="country-input"
        ref={inputRef}
      />
    </form>
  );
}

export default CountryDataForm;
