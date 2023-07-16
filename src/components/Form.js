import React, { useState } from "react";

const Form = () => {
  const [color, setColor] = useState(""); // State to hold the color value

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the form background color when the button is clicked
    document.querySelector(".form").style.backgroundColor = color;
  };

  const handleColorChange = (e) => {
    setColor(e.target.value); // Update the color state with the selected color
  };

  return (
    <>
      <form className="form">
        <div className="card-header py-3">
          <center>
            <h5 className="mb-0">Billing Details</h5>
          </center>
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form3Example1" className="form-control" />
              <label className="form-label" htmlFor="form3Example1">
                First name
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input type="text" id="form3Example2" className="form-control" />
              <label className="form-label" htmlFor="form3Example2">
                Last name
              </label>
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form3Example3" className="form-control" />
          <label className="form-label" htmlFor="form3Example3">
            Address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="email" id="form3Example4" className="form-control" />
          <label className="form-label" htmlFor="form3Example4">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="number" id="form3Example5" className="form-control" />
          <label className="form-label" htmlFor="form3Example5">
            Phone
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="color"
            id="form3Example6"
            className="form-control"
            onChange={handleColorChange} // Update the color state on change
          />
          <label className="form-label" htmlFor="form3Example6">
            Color Picker
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Change Color
        </button>
      </form>
    </>
  );
};

export default Form;
