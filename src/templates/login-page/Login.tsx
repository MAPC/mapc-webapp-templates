import React, { useState } from "react";
import { styled } from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// import particles library for background (if wanted)
// import Particles from "react-tsparticles";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadFull } from "tsparticles";

// background container
const HeroBackground = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${(props) =>
    props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "rgb(33, 154, 241)"};
`;

const HeroDiv = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "rgb(33, 154, 241)"};
`;

// background color
const LoginContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  margin-top: 2.75rem;
  background-color: ${(props) =>
    props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "rgb(33, 154, 241)"};
`;

// form container
const LoginFormDiv = styled.div`
  width: 30vw;
  height: 75%;
  display: flex;
  flex-direction: column;

  border-radius: 12.5px;
  padding: 2rem 2rem 3rem;
  background-color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "#fbfffe")};
  color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#635c7b")};
  box-shadow: 0px 0px 10px 3px #1c222f;

  justify-content: center;
  align-items: center;
  pointer-events: auto;
`;

// links
const LoginFormAnchor = styled.div`
  text-decoration: none;
  color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#635c7b")};
  text-align: center;
`;

const LoginLink = styled.a`
  text-decoration: none;
`;

// props typing, themes
interface theme {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

interface props {
  loggedIn: boolean;
  theme?: theme;
}

export default function Login({ loggedIn, theme }: props) {
  const [email, setEmail] = useState<String | null>(null);
  const [password, setPassword] = useState<String | null>(null);

  //   redirect user if logged in & particles initiation if want particles in background
  //   const particlesInit = useCallback(async (engine) => {
  //     await loadFull(engine);
  //   }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // function for submitting form to login API
    e.preventDefault();

    //   need to fill in user object returned type
    interface responseObject {
      ok: boolean;
      [key: string]: any;
    }

    const response: Promise<responseObject> | void | undefined = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (res !== undefined && res.ok) {
          // set login status, session data, user settings
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <HeroDiv>
      {/* React TS Particles, used for background design styling */}
      {/* <ParticlesHero
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
      /> */}
      <HeroBackground theme={theme} />
      <LoginContainer theme={theme}>
        <LoginFormDiv>
          <Form onSubmit={handleSubmit} style={{ width: "80%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong style={{ color: theme !== undefined ? theme?.tertiaryColor : "black" }}>Email address</strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong style={{ color: theme !== undefined ? theme?.tertiaryColor : "black" }}>Password</strong>
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mb-2"
              style={{
                width: "100%",
                background: theme !== undefined ? theme?.primaryColor : "#219af1",
                borderColor: theme !== undefined ? theme?.primaryColor : "#219af1",
              }}
            >
              <LoginFormAnchor style={{ color: theme !== undefined ? theme?.tertiaryColor : "#fbfffe" }}>
                <strong>Log in</strong>
              </LoginFormAnchor>
            </Button>
            <LoginLink href="/registration">
              <Button
                className="mb-2"
                style={{
                  width: "100%",
                  background: theme !== undefined ? theme?.secondaryColor : "#68a4dd",
                  borderColor: theme !== undefined ? theme?.secondaryColor : "#68a4dd",
                }}
              >
                <LoginFormAnchor style={{ color: theme !== undefined ? theme?.tertiaryColor : "#fbfffe" }}>
                  <strong>Register</strong>
                </LoginFormAnchor>
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
