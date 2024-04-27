import React, { useState } from "react";
import "./Create.css";

const Create = () => {
  const [textAreas, setTextAreas] = useState([]);
  const [value, setValue] = useState("");

  const addTextArea = (e) => {
    e.preventDefault();
    setTextAreas([...textAreas, textAreas.length + 1]);
    setValue("");
  };
  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <div>
        <button onClick={addTextArea}>Add New Task</button>
        <br />
        {/* Render text areas */}
        <div className="main">
          {textAreas.map((index) => (
            <div key={index} className="container">
              <form onSubmit={handleSubmit} onChange={handleOnchange}>
                <h4> TASK {index} </h4>
                <textarea
                  placeholder={`enter your ${index}`}
                  rows="4"
                  column="50"
                  value={value}
                />
                <button>save</button>
              </form>

              <br />
            </div>
          ))}
        </div>

        {/* {textAreas.map((index) => (
          <div key={index}>
            <textarea
              placeholder={`Text Area ${index + 1}`}
              rows="4"
              cols="50"
            />
            <br />
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Create;
