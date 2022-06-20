import React from "react";
import "../App.css";

function Contact() {
  return (
    <main className="">
      <div className="container d-flex justify-content-center">
        <form className="m-5 card shadow p-5 col-11 col-lg-6 d-flex flex-column align-items-center">
          <h3 className="mt-5 mb-2">Contact Me:</h3>
          <div className="d-flex flex-row align-items-center justify-content-center mb-5">
            <a
              href="https://www.linkedin.com/in/laura-walters-099137215/"
              className="text-dark text-decoration-none footer-i nav-text w-75 d-flex justify-content-center"
            >
              <i class="devicon-linkedin-plain footer-i w-75 d-flex justify-content-center"></i>
            </a>
            <a
              href="mailto:lauraewalters1098@gmail.com"
              className="text-dark text-decoration-none w-25 d-flex justify-content-center"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                className="w-50 d-flex justify-content-center"
              />
            </a>
            <a
              href="https://github.com/laurawalters1"
              className="text-dark w-75 d-flex justify-content-center"
            >
              <i class="devicon-github-original-wordmark footer-i nav-text w-75 d-flex justify-content-center"></i>
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
