import React from "react";
import "../App.css";
import styled from "styled-components";
import { RepositoryData } from "../components/RepositoryData";
import { AllRepositoryData } from "../components/AllRepositoryData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Repositories() {
  return (
    <main className="">
      <Wrapper>
        <h1>Featured Repositories</h1>
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
          {RepositoryData.map((repo) => {
            return (
              <SplideSlide>
                <Card className="m-3">
                  <Gradient />

                  <img src={repo.img} alt="" className="w-100 h-100" />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>

      <Wrapper>
        <h1>All Repositories</h1>
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
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Repositories;
