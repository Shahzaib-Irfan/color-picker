import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <center>
        <h1>Color Picker</h1>
      </center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
