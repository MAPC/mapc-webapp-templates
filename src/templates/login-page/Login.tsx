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

import useUser from "../lib/useUsers";
import { stateContext } from "./_app";
import fetchJson, { FetchError } from "../lib/fetchJson";

import { UserData } from "../types/auth";

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
  height: 60vh;
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

const LoginFormAnchor = styled.div`
  text-decoration: none;
  color: #635c7b;
  text-align: center;
`;

const LoginLink = styled(Link)`
  text-decoration: none;
`;

export default function Login() {
  const { loginStatus, setLoginStatus, userSettings, setUserSettings } = useContext(stateContext);
  const [email, setEmail] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);

  const { mutateUser } = useUser({
    // redirectTo: "/profile-sg",
    redirectTo: "/",
    redirectIfFound: true,
  });

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const user: UserData | undefined = await mutateUser(
      await fetchJson("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
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
          <Form onSubmit={handleSubmit} style={{ width: "80%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Email address</strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-2" style={{ width: "100%", background: "#219af1" }}>
              Log in
            </Button>
            <LoginLink href="/registration">
              <Button className="mb-2" style={{ width: "100%", background: "#68a4dd", borderColor: "#68a4dd" }}>
                <LoginFormAnchor style={{ color: "#fbfffe" }}>Register</LoginFormAnchor>
              </Button>
            </LoginLink>
            <LoginLink href="/login">
              <LoginFormAnchor>forgot password?</LoginFormAnchor>
            </LoginLink>
          </Form>
        </LoginFormDiv>
      </LoginContainer>
    </HeroDiv>
  );
}
