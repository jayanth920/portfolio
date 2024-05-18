"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const ContactForm = () => {
  
  const form = useRef<any>();

  const sites = [
    {
      id: 1,
      name: "Linkedin",
      designation: "",
      image:
        "https://i.gyazo.com/76f926f4dc405635082d63d553c8e5ab.png",
    },
    {
      id: 2,
      name: "Github",
      designation: "",
      image:
        "https://i.gyazo.com/85e7ce9196ae635161fec921602903a7.png",
    },
  ];

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6i0dr4d",
        "template_82jl46j",
        form.current || "",
        "jtWv7VqitHp320Q0l"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Form data:", form.current);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form2 text-slate-200">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className="userName"/>
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input className="formsub_btn" type="submit" value="Send" />
      </form>
      <div className="flex flex-row items-center justify-start mt-10 mb-10 w-full">
      <AnimatedTooltip items={sites} />
    </div>
    </div>
  );
};

export default ContactForm;
