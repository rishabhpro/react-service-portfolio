import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="John Cena" />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="JohnCena@youcanseeme.com"
            />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="John Cena is waiting for your message"
            />
          </div>
          <button type="submit">send</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
