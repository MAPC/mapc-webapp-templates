import React, { useState } from "react";
import { styled } from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
`;

const LoginContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: calc(100vh - 2.75rem);
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
  background-color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "#fbfffe")};
  color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#635c7b")};
  box-shadow: 0px 0px 10px 3px #2b3b5e;

  justify-content: center;
  align-items: center;
  pointer-events: auto;
`;

const LoginFormAnchor = styled.div`
  text-decoration: none;
  color: ${(props) => (props.theme.tertiaryColor !== undefined ? props.theme.tertiaryColor : "#635c7b")};
  text-align: center;
`;

const LoginLink = styled.a`
  text-decoration: none;
`;

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

  //   redirect user if logged in

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
                Log in
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
                  Register
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
