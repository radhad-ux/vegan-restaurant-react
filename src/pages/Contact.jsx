import React from "react";
import CHEF from "../assets/chef.png";
import ContactInfo from "../components/ContactInfo";
import FormInput from "../components/FormInput";
import Map from "../assets/mapnew.png";

export default function Contact() {
  return (
    <div className="contact_page">
      <img className="chef_img" id="chef" src={CHEF} alt="chef" />
      <h2>Get in Touch</h2>
      <ContactInfo />
      <FormInput />
      <div className="address_info">
        <p>Address</p>
        <span>Stora Nygatan 11, 111 27 Stockholm</span>
        <img className="map" src={Map} alt="Restaurant Map" />
      </div>
    </div>
  );
}
