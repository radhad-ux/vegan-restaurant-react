import React from "react";
import { useState } from "react";

export default function FormInput() {
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit} className="booking_form">
      <h3>Book a Table</h3>
      <div className="form_content">
        <label>Name</label>
        <input type="text" placeholder="Name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>No of Seats</label>
        <input type="number" placeholder="No of Seats" />
        <label>Booking date</label>
        <input type="date" placeholder="Date" />
        <button className="btn_primary">Submit</button>
      </div>
    </form>
  );
}
