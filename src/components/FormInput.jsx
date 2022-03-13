import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function FormInput() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eebovum",
        "template_aoubuqv",
        formRef.current,
        "_ovR8tkxi7MJg3e6I"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="booking_form">
      <h3>Book a Table</h3>
      <div className="form_content">
        <label>Name</label>
        <input type="text" placeholder="Name" name="user_name" />
        <label>Email</label>
        <input type="email" placeholder="Email" name="user_email" />
        <label>No of Seats</label>
        <input type="number" placeholder="No of Seats" name="user_seats" />
        <label>Booking date</label>
        <input type="date" placeholder="Date" name="date" />
        <button className="btn_primary">Submit</button>
        {done && "Thank you and see you soon!"}
      </div>
    </form>
  );
}
