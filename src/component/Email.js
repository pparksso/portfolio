import React, { useRef } from "react";
import { init } from "emailjs-com";

export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };
  init.sendForm(process.env.EMAILJS_KEY, process.env.TEMPLATE_KEY, form.current, process.env.PUBLIC_KEY).then(
    (result) => {
      console.log(result.text);
    },
    (error) => {
      console.log(error.text);
    }
  );
  return (
    <div id="email">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" cols="30" rows="10"></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}
