import React from "react";
import "../App.css";

function Contact() {
  return (
    <main className="">
      <div className="container d-flex justify-content-center">
        <form className="card shadow p-5 col-11 col-lg-6 d-flex flex-row">
          <a
            href="https://www.linkedin.com/in/laura-walters-099137215/"
            className="text-dark text-decoration-none footer-i nav-text w-50"
          >
            <i class="devicon-linkedin-plain footer-i w-50"></i>
          </a>
          <a
            href="mailto:lauraewalters1098@gmail.com"
            className="text-dark text-decoration-none w-25"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              className="w-50"
            />
          </a>
          <a href="https://github.com/laurawalters1" className="text-dark w-50">
            <i class="devicon-github-original-wordmark footer-i nav-text w-50"></i>
          </a>
        </form>
      </div>
    </main>
  );
}

export default Contact;
