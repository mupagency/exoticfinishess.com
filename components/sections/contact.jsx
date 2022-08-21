import React, { useState, useEffect, useRef } from "react";
import { FacebookIcon, InstagramIcon, EmailIcon, PinIcon, PhoneIcon } from "components/shared/icons";

const LoadingScreen = () => {
  return (
    <div className="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center z-50">
      <div className="text-2xl tracking-extrawide uppercase text-white font-acuminpro font-bold">Sending...</div>
    </div>
  );
};

const ContactSection = () => {
  const formRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  // validate form
  useEffect(() => {
    const formRefCurrent = formRef.current;

    function validateForm(event) {
      event.target.classList.add("was-validated");
      event.target.classList.add("custom-validation");
      event.preventDefault();

      if (event.target.checkValidity() === false) {
        return false;
      }

      submitContactForm();

      return true;
    }

    const submitContactForm = () => {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);

      // send formDataObject to backend using fetch post
      fetch("/contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data && data.success) {
            resetForm();
          } else {
            console.log("error");
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    };

    const resetForm = () => {
      const form = formRef.current;

      form.classList.remove("was-validated");
      form.classList.remove("custom-validation");

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    };

    formRefCurrent.addEventListener("submit", validateForm);

    return () => {
      formRefCurrent.removeEventListener("submit", validateForm);
    };
  }, [name, email, subject, message]);

  return (
    <div>
      <h2 className="font-acuminpro text-4xl lg:text-5xl uppercase text-center mb-16">Order your now!</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto md:px-4 mb-12 md:mb-24">
        <div>
          <div className="md:rounded-md bg-primary py-8 px-4 md:px-6 lg:p-8 max-w-md">
            <ul className="text-lg md:text-xl">
              <li className="flex gap-2 mb-6 items-center">
                <div className="w-12 flex-none flex justify-center text-center">
                  <EmailIcon />
                </div>
                <a href="mailto:exoticfinishess@gmail.com">exoticfinishess@gmail.com</a>
              </li>
              <li className="flex gap-2 mb-6 items-center">
                <div className="w-12 flex-none flex justify-center text-center">
                  <PinIcon />
                </div>
                <span>USA</span>
              </li>
              <li className="flex gap-2 mb-6 items-center">
                <div className="w-12 flex-none flex justify-center text-center">
                  <PhoneIcon />
                </div>
                <a href="tel:3057679095">305 767 - 9095</a>
              </li>
              <li className="flex justify-center md:justify-start gap-4 mt-6">
                <InstagramIcon />
                <FacebookIcon />
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 md:px-0">
          <h2 className="font-bold text-2xl mb-4">Contact</h2>
          <form ref={formRef} name="contactForm" className="w-full needs-validation" autoComplete="off" noValidate>
            <div className="input-group">
              <input
                className="input-field"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                minLength={4}
                required
              />
              <div className="invalid-feedback">Name is required</div>
            </div>
            <div className="input-group">
              <input
                className="input-field"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                minLength={4}
                required
              />
              <div className="invalid-feedback">Email is required</div>
            </div>
            <div className="input-group">
              <input
                className="input-field"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <div className="invalid-feedback">Subject is required</div>
            </div>
            <div className="input-group">
              <textarea
                className="input-field"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                name="message"
                id="message"
                placeholder="What service are you interested in?"
                rows={5}
                required
              />
              <div className="invalid-feedback">Message is required</div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-primary rounded-full px-8 py-1 text-center  font-normal text-3xl">
                Send
              </button>
            </div>
          </form>
        </div>
        {loading && <LoadingScreen />}
      </div>
    </div>
  );
};

export default ContactSection;
