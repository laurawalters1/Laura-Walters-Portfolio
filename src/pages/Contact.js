import React from "react";
import "../App.css";

function Contact() {
  return (
    <main className="">
      <h1>CONTACT</h1>
      <div className="container d-flex justify-content-center">
        <form className="card shadow p-5 col-6">
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Name</label>
            <input
              required
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              required
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group m-3">
            <label for="exampleInputEmail1">Message</label>
            <textarea
              required
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter message"
            />
          </div>
          <div class="form-check m-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
