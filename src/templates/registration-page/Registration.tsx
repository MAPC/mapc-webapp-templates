"use client";

import { useState, useContext, useCallback } from "react";
import { GetStaticProps } from "next";
import { styled } from "styled-components";
import Link from "next/link";
import NavBar from "../components/Nav";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import { stateContext } from "./_app";
import useUser from "../lib/useUsers";
import fetchJson, { FetchError } from "../lib/fetchJson";
import { UserData } from "../types/auth";

import municipalities from "../components/constants/munis";

const ParticlesHero = styled(Particles)`
  width: 100vw;
  height: calc(100vh - 2.75rem);
  margin-top: -0.5rem;
`;

const HeroDiv = styled.div`
  width: 100vw;
  /* height: 49rem; */
  display: flex;
  flex-direction: column;
`;

const LoginContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 2.75rem);
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  margin-top: 2.75rem;
`;

const LoginFormDiv = styled.div`
  width: 30vw;
  height: 87.5vh;
  display: flex;
  flex-direction: column;

  border-radius: 12.5px;
  padding: 2rem 2rem 3rem;
  background-color: #fbfffe;
  color: #635c7b;
  box-shadow: 0px 0px 10px 3px #2b3b5e;

  justify-content: center;
  align-items: center;
  pointer-events: auto;
`;

const LoginFormAnchor = styled.a`
  text-decoration: none;
  color: #635c7b;
  text-align: center;
`;

export default function Registration() {
  const { loginStatus, setLoginStatus, userSettings, setUserSettings } = useContext(stateContext);
  const [email, setEmail] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState<String | null>(null);

  const [name, setName] = useState<string | null>(null);
  const [muni, setMuni] = useState<string>("N/A");

  const [passwordValidity, setPasswordValidity] = useState<boolean | undefined>(false);
  const [muniValidity, setMuniValidity] = useState<boolean | undefined>(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const { mutateUser } = useUser({
    // redirectTo: "/profile-sg",
    redirectTo: "/",
    redirectIfFound: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      setPasswordValidity(false);
      return;
    } else {
      setPasswordValidity(true);
    }

    if (municipalities.includes(muni)) {
      setMuniValidity(true);
    } else {
      setMuniValidity(false);
      return;
    }

    const user: UserData | undefined = await mutateUser(
      await fetchJson("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, muni, name }),
      }),
      false
    );

    if (user !== undefined && user.ok === true) {
      setLoginStatus(true);
      setUserSettings(user.userSession);
    }
  }

  return (
    <HeroDiv>
      <NavBar />
      <ParticlesHero
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
        }}
      />
      <LoginContainer>
        <LoginFormDiv>
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Form.Label className={"mb-1"} style={{ width: "100%" }}>
              <h4 className={"mb-0"} style={{ width: "100%", textAlign: "center" }}>
                <strong>REGISTRATION</strong>
              </h4>
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Email address</strong>
              </Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control
                required
                isValid={passwordValidity}
                className="mb-3"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form.Label>
                <strong>Confirm Password</strong>
              </Form.Label>
              <Form.Control
                required
                isValid={passwordValidity}
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Label>Additional Info</Form.Label>
            <Form.Group>
              <Form.Label>
                <strong>Name</strong>
              </Form.Label>
              <Form.Control
                required
                className="mb-3"
                type="text"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Form.Label>
                <strong>Municipality</strong>
              </Form.Label>
              <Form.Select
                required
                isValid={muniValidity}
                className="mb-3"
                onChange={(e) => {
                  setMuni(e.target.value);
                }}
                aria-label="Default select example"
              >
                <option>Select a municipality</option>
                {municipalities.map((element, key) => {
                  return (
                    <option key={key} value={element}>
                      {element}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-2" style={{ width: "100%", background: "#219af1" }}>
              Register
            </Button>
          </Form>
        </LoginFormDiv>
      </LoginContainer>
    </HeroDiv>
  );
}
