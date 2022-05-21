import React from "react";
import "../App.css";
import pic from "../laurawalters3.jpeg"

function Home() {
  return (
    <main className="d-flex flex-column align-items-center">
    <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center justify-content-lg-start container">
      <div className="">
      </div>
        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start">
        <div class="card w-75 p-4 shadow border-0 d-flex flex-column flex-lg-row" >
         <div className="w-100 w-lg-25 d-flex flex-column align-content-center justify-content-center">
        <img class=" card-image-top rounded" src={pic} alt="Card image cap"/>

          {/* <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
  </div>
  </div>
</div>
<div className="col-12 col-lg-8 card shadow border-0 p-5 h-100 mt-5 mt-lg-0">

<h3 className="mb-5">My Technologies</h3>
<div className="col-12 d-flex flex-row jusify-content-center">
<i class="devicon-javascript-plain colored tech-i "></i>

<i class="devicon-react-original-wordmark  colored tech-i"></i>

<i class="devicon-php-plain colored tech-i"></i>

<i class="devicon-laravel-plain-wordmark colored tech-i"></i>
          

<i class="devicon-sequelize-plain-wordmark colored tech-i"></i>
          

<i class="devicon-amazonwebservices-plain-wordmark colored tech-i"></i>
          
</div>
<div className="col-12">
<i class="devicon-composer-line-wordmark colored tech-i"></i>
          
<i class="devicon-bootstrap-plain-wordmark colored tech-i"></i>
          
<i class="devicon-git-plain-wordmark colored tech-i"></i>
          
<i class="devicon-github-original-wordmark colored tech-i"></i>
          
<i class="devicon-heroku-plain-wordmark colored tech-i"></i>
          
<i class="devicon-handlebars-plain-wordmark colored tech-i"></i>
</div>
<div className="col-12">
          
<i class="devicon-mongodb-plain-wordmark colored tech-i"></i>
          
<i class="devicon-mysql-plain-wordmark colored tech-i"></i>
          
<i class="devicon-nodejs-plain-wordmark colored tech-i"></i>
          
<i class="devicon-npm-original-wordmark colored tech-i"></i>
          
</div>   
          
          
          
</div>
</div>
<div className="col-11 col-lg-10 card shadow border-0 p-5 h-100 mt-5">
  <h3>About Me</h3>
</div>

    </main>
  );
}

export default Home;
