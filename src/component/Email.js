import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Email() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY).then(
      (result) => {
        alert("전송되었습니다.");
        form.current.reset();
      },
      (error) => {
        alert("전송에 실패하였습니다.");
      }
    );
  };
  return (
    <div id="email">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" cols="30" rows="10" required></textarea>
        <button type="submit">
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
}
