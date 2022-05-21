import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { RepositoryData } from "../components/RepositoryData";
import { AllRepositoryData } from "../components/AllRepositoryData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Repositories() {
  return (
    <main className="container">
      <div className="card shadow p-2">
        <Wrapper>
          <h1 className="m-4">Featured Repositories</h1>
          <Splide
            className="d-flex justify-content-center"
            options={{
              perPage: 1,
              breakpoints: {
                1240: {
                  perPage: 1,
                },
                640: {
                  perPage: 1,
                },
              },
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "0rem",
            }}
          >
            {RepositoryData.map((repo, index) => {
              return (
                <SplideSlide className="d-flex justify-content-center align-items-center">
                  <Card className="m-3 card ">
                    <Gradient />
                    <img src={repo.img} alt="" className="w-100 h-100" />
                    <p className="d-flex flex-column">
                      <a href={repo.repo}>
                        <button type="button" class="btn btn-outline-light m-1">
                          View Repository
                        </button>
                      </a>

                      <a href={repo.link}>
                        <button type="button" class="btn btn-outline-light m-1">
                          View Deployed Application
                        </button>
                      </a>
                    </p>
                  </Card>
                  <div className=" col-4 mx-5 d-none d-lg-flex flex-column">
                    <h3>{repo.title}</h3>
                    <p className="text-dark">{repo.description}</p>
                  </div>
                </SplideSlide>
              );
            })}
          </Splide>
        </Wrapper>
      </div>
      <Wrapper>
        <h1 className="text-white">All Repositories</h1>
        <Splide
          className="d-flex justify-content-center"
          options={{
            perPage: 3,
            breakpoints: {
              1240: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "0rem",
          }}
        >
          {AllRepositoryData.map((repo) => {
            return (
              <SplideSlide>
                <Card className="m-3">
                  <Gradient />

                  <img src={repo.img} alt="" className="w-100 h-100" />
                  <p className="d-flex flex-column">
                    <a href={repo.repo}>
                      <button type="button" class="btn btn-outline-light m-1">
                        View Repository
                      </button>
                    </a>

                    {repo.link ? (
                      <a href={repo.link}>
                        <button type="button" class="btn btn-outline-light m-1">
                          View Deployed Application
                        </button>
                      </a>
                    ) : (
                      ""
                    )}
                  </p>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  margin: 0;
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  height: 400px;
  width: 400px;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;

    bottom: 0%;
    transform: translate(-50%, 0%)
    color: white;
    width: 100% !important;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
   
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
`;

export default Repositories;
